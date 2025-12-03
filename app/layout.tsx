import { UserProvider } from "./contexts/UserContext";
import { UserDisplay } from "./components/UserDisplay";
import { cookies } from "next/headers";

// Fetch user data on the server
async function getCurrentUser(userId?: string) {
	const id = userId || "1";
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
		next: { revalidate: 3600 }, // Cache for 1 hour
	});
	if (!res.ok) {
		throw new Error("Failed to fetch user");
	}
	return res.json();
}

// Fetch all users for the selector
async function getAllUsers() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: { revalidate: 3600 }, // Cache for 1 hour
	});
	if (!res.ok) {
		throw new Error("Failed to fetch users");
	}
	return res.json();
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Get selected user ID from cookie
	const cookieStore = await cookies();
	const selectedUserId = cookieStore.get("selectedUserId")?.value;

	const [user, allUsers] = await Promise.all([
		getCurrentUser(selectedUserId),
		getAllUsers(),
	]);

	return (
		<html lang="en">
			<body>
				<UserProvider initialUser={user} allUsers={allUsers}>
					<UserDisplay />
					{children}
				</UserProvider>
			</body>
		</html>
	);
}
