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

					<Box sx={{ mb: 4 }}>
						<Skeleton variant="text" width="40%" height={40} sx={{ mb: 2 }} />
						<Skeleton variant="text" width="30%" height={30} sx={{ mb: 2 }} />
						{[...Array(3)].map((_, i) => (
							<Skeleton
								key={i}
								variant="rectangular"
								height={80}
								sx={{ mb: 2 }}
							/>
						))}
					</Box>

					<Box sx={{ mb: 4 }}>
						<Skeleton variant="rectangular" height={150} />
					</Box>

					<Box>
						<Skeleton variant="rectangular" height={200} />
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}
