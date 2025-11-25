import { Box, Container, Paper, Skeleton } from "@mui/material";

export default function Loading() {
	return (
		<Box
			sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4, px: 2 }}
		>
			<Container maxWidth="lg">
				<Skeleton variant="text" width={150} height={30} sx={{ mb: 3 }} />

				<Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
					<Skeleton variant="text" width="60%" height={60} sx={{ mb: 2 }} />
					<Skeleton variant="text" width="80%" height={40} sx={{ mb: 3 }} />

					{[...Array(5)].map((_, i) => (
						<Box key={i} sx={{ mb: 2 }}>
							<Skeleton variant="rectangular" height={120} sx={{ mb: 1 }} />
						</Box>
					))}
				</Paper>
			</Container>
		</Box>
	);
}
