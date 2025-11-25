"use client";

import { useState } from "react";
import { Box, Typography, Paper, Card, CardContent } from "@mui/material";

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

export function InteractiveChart({ users }: { users: User[] }) {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	return (
		<Paper
			sx={{ p: 3, bgcolor: "success.light", color: "success.contrastText" }}
		>
			<Box sx={{ mb: 2 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Interactive User List (Click to select)
				</Typography>

				{selectedUser && (
					<Paper sx={{ p: 2, mb: 2, bgcolor: "primary.main", color: "white" }}>
						<Typography variant="body1">
							<strong>Selected:</strong> {selectedUser.name} (
							{selectedUser.email})
						</Typography>
					</Paper>
				)}

				<Typography variant="body2" sx={{ mb: 1 }}>
					Server data ({users.length} users) passed to client component as
					props:
				</Typography>

				{users.map((user) => {
					const isSelected = selectedUser?.id === user.id;
					return (
						<Card
							sx={{
								mt: 2,
								border: 2,
								borderColor: isSelected ? "primary.main" : "success.main",
								bgcolor: isSelected ? "primary.light" : "inherit",
								cursor: "pointer",
								transition: "all 0.3s",
								"&:hover": {
									transform: "scale(1.02)",
									boxShadow: 4,
								},
							}}
							key={user.id}
							onClick={() => setSelectedUser(user)}
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
			</Box>
		</Paper>
	);
}
