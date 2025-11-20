"use client";

import { Box, Typography, Paper, Card, CardContent } from "@mui/material";

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

export function InteractiveChart({ users }: { users: User[] }) {
	return (
		<Paper
			sx={{ p: 3, bgcolor: "success.light", color: "success.contrastText" }}
		>
			<Box sx={{ mb: 2 }}>
				<Typography variant="body2" sx={{ mb: 1 }}>
					Server data ({users.length} users) passed to client component as
					props:
					{users.map((user) => {
						return (
							<Card
								sx={{ mt: 2, border: 2, borderColor: "success.main" }}
								key={user.id}
							>
								<CardContent>
									<Box
										sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
									>
										<Typography variant="body2">
											<strong>Name:</strong> {user.name}
										</Typography>
										<Typography variant="body2">
											<strong>Username:</strong> @{user.username}
										</Typography>
										<Typography variant="body2">
											<strong>Email:</strong> {user.email}
										</Typography>
									</Box>
								</CardContent>
							</Card>
						);
					})}
				</Typography>
			</Box>
		</Paper>
	);
}
