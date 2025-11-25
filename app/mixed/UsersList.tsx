import { Box, Card, CardContent, Typography } from "@mui/material";

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

async function getUsers(): Promise<User[]> {
	// Add 2-second delay to see Suspense fallback
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const res = await fetch(
		"https://jsonplaceholder.typicode.com/users?_limit=3",
		{
			cache: "no-store",
		}
	);

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	return res.json();
}

export async function UsersList() {
	const users = await getUsers();

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			{users.map((user) => (
				<Card key={user.id} variant="outlined">
					<CardContent>
						<Typography variant="h6" sx={{ fontWeight: "semibold" }}>
							{user.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							@{user.username}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{user.email}
						</Typography>
					</CardContent>
				</Card>
			))}
		</Box>
	);
}
