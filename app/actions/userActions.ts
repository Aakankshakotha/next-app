"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function setUserCookie(userId: number) {
	const cookieStore = await cookies();
	cookieStore.set("selectedUserId", userId.toString(), {
		maxAge: 60 * 60 * 24 * 30, // 30 days
		path: "/",
	});

	// Revalidate all pages to show the new user
	revalidatePath("/", "layout");
}
