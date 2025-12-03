"use client";

import {
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Typography,
	Avatar,
	SelectChangeEvent,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useUser } from "../contexts/UserContext";
import { setUserCookie } from "../actions/userActions";
import { useTransition } from "react";

export function UserSelector() {
	const { user, allUsers, setCurrentUser } = useUser();
	const [isPending, startTransition] = useTransition();

	const handleChange = (event: SelectChangeEvent<number>) => {
		const userId = Number(event.target.value);

		setCurrentUser(userId);

		startTransition(async () => {
			await setUserCookie(userId);
		});
	};

	if (allUsers.length === 0) {
		return (
			<Box sx={{ mb: 3, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
				<Typography variant="caption" color="text.secondary">
					No users available to switch
				</Typography>
			</Box>
		);
	}

	return (
		<Box sx={{ mb: 3, p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
			<Typography variant="subtitle2" sx={{ mb: 2 }}>
				Switch User (from Server Component):
			</Typography>

			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<Avatar sx={{ bgcolor: "primary.main" }}>
					<PersonIcon />
				</Avatar>

				<FormControl fullWidth size="small">
					<InputLabel id="user-select-label">Select User</InputLabel>
					<Select
						labelId="user-select-label"
						id="user-select"
						value={user.id}
						label="Select User"
						onChange={handleChange}
						disabled={isPending}
					>
						{allUsers.map((u) => (
							<MenuItem key={u.id} value={u.id}>
								<Box>
									<Typography variant="body2" fontWeight="bold">
										{u.name}
									</Typography>
									<Typography variant="caption" color="text.secondary">
										@{u.username} • {u.email}
									</Typography>
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			<Typography variant="caption" sx={{ mt: 2, display: "block" }}>
				Current user: <strong>{user.name}</strong> (@{user.username})
				{isPending && " • Saving..."}
			</Typography>
		</Box>
	);
}
