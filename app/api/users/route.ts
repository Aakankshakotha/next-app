import { NextResponse } from "next/server";

// In-memory storage (in production, use a database)
const users = [
	{ id: 1, name: "John Doe", email: "john@example.com" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

// GET all users
export async function GET() {
	return NextResponse.json({
		success: true,
		users,
		count: users.length,
	});
}

// POST - Create a new user
export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email } = body;

		if (!name || !email) {
			return NextResponse.json(
				{ success: false, error: "Name and email are required" },
				{ status: 400 }
			);
		}

		const newUser = {
			id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
			name,
			email,
		};

		users.push(newUser);

		return NextResponse.json({ success: true, user: newUser }, { status: 201 });
	} catch {
		return NextResponse.json(
			{ success: false, error: "Invalid request body" },
			{ status: 400 }
		);
	}
}
