"use client";

import { Box, Container, Typography, Paper, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { ClientCounter } from "../ClientCounter";

export default function CSRPage() {
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
						Client Component Example
					</Typography>

					<ClientCounter />
				</Paper>
			</Container>
		</Box>
	);
}
