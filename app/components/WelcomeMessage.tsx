"use client";

import { Paper, Typography } from "@mui/material";
import { useUser } from "../contexts/UserContext";

/**
 * Example component showing how to access user from context on any page
 * This can be used anywhere in your app!
 */
export function WelcomeMessage() {
	const { user } = useUser();

	return (
		<Paper
			sx={{
				p: 3,
				mb: 3,
			}}
		>
			<Typography variant="h5" gutterBottom>
				Welcome, {user.name}! 👋
			</Typography>
			<Typography variant="body2" color="text.secondary">
				You&apos;re logged in as <strong>@{user.username}</strong>
			</Typography>
			<Typography
				variant="caption"
				display="block"
				sx={{ mt: 1 }}
				color="text.secondary"
			>
				Email: {user.email}
			</Typography>
		</Paper>
	);
}
