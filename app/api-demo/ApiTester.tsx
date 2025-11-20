"use client";

import { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";

export function ApiTester() {
	const [response, setResponse] = useState<string>("");
	const [loading, setLoading] = useState(false);

	async function testApi(endpoint: string, method: string, body?: object) {
		setLoading(true);
		try {
			const options: RequestInit = {
				method,
				headers: {
					"Content-Type": "application/json",
				},
			};

			if (body) {
				options.body = JSON.stringify(body);
			}

			const res = await fetch(endpoint, options);
			const data = await res.json();
			setResponse(JSON.stringify(data, null, 2));
		} catch (error) {
			setResponse(`Error: ${error}`);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
			<Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
				Test API Endpoints
			</Typography>

			{/* Button Grid */}
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
					gap: 2,
				}}
			>
				<Button
					onClick={() => testApi("/api/hello", "GET")}
					disabled={loading}
					variant="contained"
					color="primary"
					sx={{ p: 2 }}
				>
					GET /api/hello
				</Button>

				<Button
					onClick={() =>
						testApi("/api/hello", "POST", { message: "Hello from client!" })
					}
					disabled={loading}
					variant="contained"
					color="success"
					sx={{ p: 2 }}
				>
					POST /api/hello
				</Button>

				<Button
					onClick={() => testApi("/api/users", "GET")}
					disabled={loading}
					variant="contained"
					color="secondary"
					sx={{ p: 2 }}
				>
					GET /api/users
				</Button>

				<Button
					onClick={() =>
						testApi("/api/users", "POST", {
							name: "New User",
							email: "newuser@example.com",
						})
					}
					disabled={loading}
					variant="contained"
					sx={{ p: 2, bgcolor: "#f97316", "&:hover": { bgcolor: "#ea580c" } }}
				>
					POST /api/users (Create)
				</Button>
			</Box>

			{/* Response Display */}
			<Box>
				<Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
					Response:
				</Typography>
				<Paper
					elevation={0}
					sx={{
						bgcolor: "#111827",
						color: "#4ade80",
						p: 2,
						borderRadius: 2,
						overflowX: "auto",
						minHeight: 200,
					}}
				>
					{loading ? (
						<Typography sx={{ color: "#fbbf24" }}>Loading...</Typography>
					) : response ? (
						<Typography component="pre" sx={{ fontSize: "0.875rem", m: 0 }}>
							{response}
						</Typography>
					) : (
						<Typography sx={{ color: "#6b7280" }}>
							Click a button above to test an API endpoint
						</Typography>
					)}
				</Paper>
			</Box>
		</Box>
	);
}
