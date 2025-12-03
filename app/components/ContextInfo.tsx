"use client";

import { Paper, Typography, Box, Chip } from "@mui/material";
import { useUser } from "../contexts/UserContext";

export function ContextInfo() {
	const { user } = useUser();

	return (
		<Paper
			sx={{
				p: 3,
				mb: 3,
			}}
		>
			<Typography variant="h6" gutterBottom>
				👤 User Context Demo
			</Typography>

			<Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
				<Box>
					<Typography variant="subtitle2" sx={{ mb: 1 }}>
						Current User:
					</Typography>
					<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
						<Chip label={`User: ${user.name}`} size="small" />
						<Chip label={`@${user.username}`} size="small" variant="outlined" />
						<Chip label={user.email} size="small" variant="outlined" />
					</Box>
				</Box>
			</Box>

			<Typography
				variant="caption"
				display="block"
				color="text.secondary"
				sx={{ mt: 2 }}
			>
				✨ User context is available globally on every page via React Context +
				SSR
			</Typography>
		</Paper>
	);
}
