import { Suspense } from "react";
import {
	Box,
	Container,
	Typography,
	Paper,
	Skeleton,
	Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ClientCounter } from "../ClientCounter";
import { InteractiveChart } from "./InteractiveChart";
import { UsersList } from "./UsersList";

// This is a Server Component that imports Client Components
// Demonstrates the composition pattern with Suspense

function UsersListFallback() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			{[...Array(3)].map((_, i) => (
				<Skeleton key={i} variant="rectangular" height={80} />
			))}
		</Box>
	);
}

export default function MixedPage() {
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
						<Suspense fallback={<UsersListFallback />}>
							<UsersList />
						</Suspense>
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
							Client Component: Chart (Using Server Data with Suspense)
						</Typography>
						<Suspense
							fallback={<Skeleton variant="rectangular" height={200} />}
						>
							<InteractiveChartWrapper />
						</Suspense>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}

// Wrapper component to fetch data and pass to client component
// Wrapper component to fetch data and pass to client component
async function InteractiveChartWrapper() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/users?_limit=3",
		{ cache: "no-store" }
	);
	const users = await res.json();
	return <InteractiveChart users={users} />;
}
