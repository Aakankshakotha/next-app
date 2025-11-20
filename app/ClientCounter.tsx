"use client";

import { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export function ClientCounter() {
	const [count, setCount] = useState(0);

	return (
		<Paper sx={{ p: 3, bgcolor: "info.light", color: "info.contrastText" }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
					justifyContent: "center",
				}}
			>
				<Button
					variant="contained"
					color="error"
					onClick={() => setCount(count - 1)}
					startIcon={<RemoveIcon />}
				>
					Decrement
				</Button>
				<Box sx={{ textAlign: "center" }}>
					<Typography variant="h3" sx={{ fontWeight: "bold" }}>
						{count}
					</Typography>
				</Box>
				<Button
					variant="contained"
					color="success"
					onClick={() => setCount(count + 1)}
					startIcon={<AddIcon />}
				>
					Increment
				</Button>
			</Box>
		</Paper>
	);
}
