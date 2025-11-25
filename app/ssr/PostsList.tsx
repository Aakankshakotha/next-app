import { Box, Paper, Typography, Chip } from "@mui/material";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

async function getPosts(): Promise<Post[]> {
	// 👇 ADD THIS: Simulate slow network (2 second delay)
	await new Promise((resolve) => setTimeout(resolve, 2000));

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
export async function PostsList() {
	const posts = await getPosts();

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			{posts.map((post) => (
				<Paper
					key={post.id}
					sx={{
						p: 3,
						transition: "transform 0.2s, box-shadow 0.2s",
						"&:hover": {
							transform: "translateY(-2px)",
							boxShadow: 4,
						},
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
						<Chip label={`Post #${post.id}`} size="small" color="primary" />
						<Chip
							label={`User ${post.userId}`}
							size="small"
							variant="outlined"
						/>
					</Box>
					<Typography variant="h6" sx={{ fontWeight: "semibold", mb: 1 }}>
						{post.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{post.body}
					</Typography>
				</Paper>
			))}
		</Box>
	);
}
