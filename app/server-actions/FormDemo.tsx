"use client";

import { useState } from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	Paper,
	Alert,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { submitContactForm } from "./actions";

export function FormDemo() {
	const [messages, setMessages] = useState<string[]>([]);

	async function handleContactSubmit(formData: FormData) {
		const result = await submitContactForm(formData);
		setMessages((prev) => [...prev, result.message]);
	}

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
			{/* Messages Display */}
			{messages.length > 0 && (
				<Alert severity="success">
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: "semibold", mb: 1 }}
					>
						Server Responses:
					</Typography>
					<List dense>
						{messages.map((msg, idx) => (
							<ListItem key={idx} disablePadding>
								<ListItemText primary={`• ${msg}`} />
							</ListItem>
						))}
					</List>
				</Alert>
			)}

			{/* Contact Form */}
			<Paper variant="outlined" sx={{ p: 3 }}>
				<Typography
					variant="h5"
					gutterBottom
					sx={{ fontWeight: "semibold", mb: 2 }}
				>
					Contact Form (Server Action)
				</Typography>
				<Box
					component="form"
					action={handleContactSubmit}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}
				>
					<TextField id="name" name="name" label="Name" required fullWidth />
					<TextField
						id="email"
						name="email"
						label="Email"
						type="email"
						required
						fullWidth
					/>
					<TextField
						id="message"
						name="message"
						label="Message"
						required
						multiline
						rows={4}
						fullWidth
					/>
					<Button type="submit" variant="contained" fullWidth>
						Submit Contact Form
					</Button>
				</Box>
			</Paper>
		</Box>
	);
}
