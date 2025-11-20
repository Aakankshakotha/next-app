import { Box, Container, Typography, Paper, Chip, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// This is a Server Component (default in Next.js App Router)
// - Runs on the server
// - Can use async/await directly
// - Can access backend resources, databases, etc.
// - Automatically benefits from React Server Components

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

async function getPosts(): Promise<Post[]> {
	// Fetch with revalidation every 60 seconds
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=5",
		{
			next: { revalidate: 60 },
		}
	);
	if (!res.ok) {
		throw new Error("Failed to fetch posts");
	}
	return res.json();
}

export default async function SSRPage() {
	const posts = await getPosts();

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
						Latest Posts (Revalidated every 60s)
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{posts.map((post) => (
							<Paper
								key={post.id}
								variant="outlined"
								sx={{
									p: 2,
									transition: "box-shadow 0.3s",
									"&:hover": { boxShadow: 3 },
								}}
							>
								<Typography
									variant="h6"
									gutterBottom
									sx={{ fontWeight: "semibold" }}
								>
									{post.title}
								</Typography>
								<Typography variant="body1" color="text.secondary" paragraph>
									{post.body}
								</Typography>
								<Box sx={{ display: "flex", gap: 1 }}>
									<Chip
										label={`Post ID: ${post.id}`}
										size="small"
										variant="outlined"
									/>
									<Chip
										label={`User ID: ${post.userId}`}
										size="small"
										variant="outlined"
									/>
								</Box>
							</Paper>
						))}
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}
