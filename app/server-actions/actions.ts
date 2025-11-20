// Server Actions - these functions run on the server only
// They can access databases, file systems, environment variables, etc.
"use server";
export async function submitContactForm(formData: FormData) {
	// Simulate server-side processing
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	// Simulate async operation (e.g., saving to database)
	await new Promise((resolve) => setTimeout(resolve, 500));

	console.log("Contact form submitted:", { name, email, message });

	return {
		success: true,
		message: `Thank you ${name}! Your message has been received. We'll contact you at ${email}.`,
	};
}
