import { NextResponse } from "next/server";

// GET request handler
export async function GET() {
	return NextResponse.json({
		message: "Hello from Next.js API Route!",
		timestamp: new Date().toISOString(),
		method: "GET",
	});
}

// POST request handler
export async function POST(request: Request) {
	const body = await request.json();

	return NextResponse.json({
		message: "Data received successfully!",
		receivedData: body,
		timestamp: new Date().toISOString(),
		method: "POST",
	});
}
