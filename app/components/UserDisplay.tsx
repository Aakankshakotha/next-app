"use client";

import { Box, Avatar, Typography, Chip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useUser } from "../contexts/UserContext";

export function UserDisplay() {
	const { user } = useUser();

	return (
		<Box
			sx={{
				position: "fixed",
				top: 16,
				right: 16,
				zIndex: 1000,
				display: "flex",
				alignItems: "center",
				gap: 1,
				bgcolor: "background.paper",
				px: 2,
				py: 1,
				borderRadius: 2,
				boxShadow: 2,
			}}
		>
			<Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
				<PersonIcon sx={{ fontSize: 20 }} />
			</Avatar>
			<Box>
				<Typography variant="body2" fontWeight="bold">
					{user.name}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					@{user.username}
				</Typography>
			</Box>
			<Chip label="Online" size="small" color="success" />
		</Box>
	);
}
