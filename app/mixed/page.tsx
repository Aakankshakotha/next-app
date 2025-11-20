import {
	Box,
	Container,
	Typography,
	Paper,
	Card,
	CardContent,
	Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ClientCounter } from "../ClientCounter";
import { InteractiveChart } from "./InteractiveChart";

// This is a Server Component that imports Client Components
// Demonstrates the composition pattern

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

async function getUsers(): Promise<User[]> {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/users?_limit=3",
		{
			cache: "no-store", // Always fresh data
		}
	);

	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}

	return res.json();
}

export default async function MixedPage() {
	// Server-side data fetching
	const users = await getUsers();
	console.log(users);
	const serverTime = new Date().toLocaleString();

	return (
		<Box
			sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4, px: 2 }}
		>
			<Container maxWidth="lg">
				<Link href="/" style={{ textDecoration: "none" }}>
					<Box
						sx={{
							display: "inline-flex",
							alignItems: "center",
							gap: 1,
							mb: 3,
							color: "primary.main",
							"&:hover": { textDecoration: "underline" },
						}}
					>
						<ArrowBackIcon fontSize="small" />
						<Typography>Back to Home</Typography>
					</Box>
				</Link>{" "}
				<Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						sx={{ fontWeight: "bold" }}
					>
						Mixed Components Example
					</Typography>

					{/* Server Component Section */}
					<Box sx={{ mb: 4 }}>
						<Typography
							variant="h5"
							gutterBottom
							sx={{ fontWeight: "semibold" }}
						>
							Server-Rendered User List
						</Typography>
						<Typography
							variant="caption"
							color="text.secondary"
							display="block"
							sx={{ mb: 2 }}
						>
							Fetched on server at: {serverTime}
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
							{users.map((user) => (
								<Card key={user.id} variant="outlined">
									<CardContent>
										<Typography variant="h6" sx={{ fontWeight: "semibold" }}>
											{user.name}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											@{user.username} • {user.email}
										</Typography>
									</CardContent>
								</Card>
							))}
						</Box>
					</Box>

					{/* Client Component Section */}
					<Box sx={{ mb: 4 }}>
						<Typography
							variant="h5"
							gutterBottom
							sx={{ fontWeight: "semibold" }}
						>
							Client Component: Interactive Counter
						</Typography>
						<ClientCounter />
					</Box>

					{/* Client Component with Server Data */}
					<Box>
						<Typography
							variant="h5"
							gutterBottom
							sx={{ fontWeight: "semibold" }}
						>
							Client Component: Chart (Using Server Data)
						</Typography>
						<InteractiveChart users={users} />
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}
