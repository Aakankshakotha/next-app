import Link from "next/link";
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	CardActionArea,
} from "@mui/material";
import { WelcomeMessage } from "./components/WelcomeMessage";

export default function Home() {
	return (
		<Box sx={{ py: 8 }}>
			<Container>
				<Box sx={{ textAlign: "center", mb: 4 }}>
					<Typography
						variant="h2"
						component="h1"
						sx={{ fontWeight: "bold", mb: 2 }}
					>
						Next.js
					</Typography>
				</Box>

				<WelcomeMessage />

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
						gap: 3,
					}}
				>
					<FeatureCard href="/ssr" title="Server Component" />
					<FeatureCard href="/csr" title="Client Component" />
					<FeatureCard href="/mixed" title="Mixed Components" />
					<FeatureCard href="/server-actions" title="Server Actions" />
					<FeatureCard href="/api-demo" title="API Routes" />
				</Box>
			</Container>
		</Box>
	);
}

function FeatureCard({ href, title }: { href: string; title: string }) {
	return (
		<Card
			sx={{
				height: "100%",
			}}
		>
			<Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
				<CardActionArea sx={{ height: "100%", p: 2 }}>
					<CardContent>
						<Typography
							variant="h5"
							component="h2"
							gutterBottom
							sx={{ fontWeight: "semibold" }}
						>
							{title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
}
