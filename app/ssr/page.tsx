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
import { PostsList } from "./PostsList";

// This is a Server Component (default in Next.js App Router)
// - Runs on the server
// - Can use async/await directly
// - Can access backend resources, databases, etc.
// - Automatically benefits from React Server Components
// - Uses Suspense for streaming and better UX

function PostsListFallback() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			{[...Array(5)].map((_, i) => (
				<Skeleton key={i} variant="rectangular" height={120} />
			))}
		</Box>
	);
}

export default function SSRPage() {
	return (
		<Box
			sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4, px: 2 }}
		>
			<Container maxWidth="lg">
				<Box
					component={Link}
					href="/"
					sx={{
						display: "inline-flex",
						alignItems: "center",
						gap: 1,
						mb: 3,
						color: "primary.main",
						textDecoration: "none",
						"&:hover": { textDecoration: "underline" },
					}}
				>
					<ArrowBackIcon fontSize="small" />
					<Typography>Back to Home</Typography>
				</Box>

				<Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						sx={{ fontWeight: "bold" }}
					>
						Server Component Example
					</Typography>

					<Typography
						variant="h5"
						gutterBottom
						sx={{ fontWeight: "semibold", mb: 3 }}
					>
						Latest Posts (Streaming with Suspense)
					</Typography>

					<Suspense fallback={<PostsListFallback />}>
						<PostsList />
					</Suspense>
				</Paper>
			</Container>
		</Box>
	);
}
