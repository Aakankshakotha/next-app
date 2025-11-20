# Next.js Concepts Demo Application

A comprehensive Next.js application showcasing all major Next.js features and concepts including Server Components, Client Components, Mixed Components, Server Actions, API Routes, and Built-in APIs.

## 🚀 Features

This demo application includes examples of:

### 1. **Server Components** (`/ssr`)

- Async data fetching on the server
- React Server Components
- Data revalidation strategies
- Zero client-side JavaScript for the component

### 2. **Client Components** (`/csr`)

- Interactive UI with React hooks (useState, useEffect)
- Client-side data fetching
- Event handlers and user interactions
- Browser-only features

### 3. **Mixed Components** (`/mixed`)

- Combining Server and Client Components
- Passing server data as props to client components
- Optimal rendering strategies
- Component composition patterns

### 4. **Server Actions** (`/server-actions`)

- Form submissions without API routes
- Progressive enhancement
- Server-side mutations
- Direct server function calls from client

### 5. **API Routes** (`/api-demo`)

- RESTful API endpoints
- GET, POST, DELETE methods
- Request/Response handling
- Interactive API testing interface

### 6. **Built-in APIs** (`/built-in-apis`)

- `headers()` - Access request headers
- `cookies()` - Read and set cookies
- `searchParams` - URL query parameters
- Server-side utilities

## 📁 Project Structure

```
app/
├── page.tsx                    # Home page with navigation
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
├── ssr/
│   └── page.tsx               # Server Component example
├── csr/
│   └── page.tsx               # Client Component example
├── mixed/
│   ├── page.tsx               # Mixed components example
│   ├── ClientCounter.tsx      # Client component
│   └── InteractiveChart.tsx   # Client component with server data
├── server-actions/
│   ├── page.tsx               # Server Actions demo page
│   ├── FormDemo.tsx           # Client form component
│   └── actions.ts             # Server Actions definitions
├── api/
│   ├── hello/
│   │   └── route.ts           # Simple API route
│   └── users/
│       └── route.ts           # CRUD API route
├── api-demo/
│   ├── page.tsx               # API testing page
│   └── ApiTester.tsx          # Client component for testing APIs
└── built-in-apis/
    ├── page.tsx               # Built-in APIs demo
    ├── CookieManager.tsx      # Cookie management component
    └── actions.ts             # Cookie-related server actions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Key Concepts Demonstrated

### Server Components (Default)

```tsx
// No "use client" directive
export default async function Page() {
	const data = await fetch("...");
	return <div>{/* ... */}</div>;
}
```

### Client Components

```tsx
"use client";
import { useState } from "react";

export default function Page() {
	const [state, setState] = useState();
	return <div>{/* ... */}</div>;
}
```

### Server Actions

```tsx
"use server";
export async function myAction(formData: FormData) {
	// Server-side code
}
```

### API Routes

```tsx
// app/api/route.ts
export async function GET(request: Request) {
	return NextResponse.json({ data: "..." });
}
```

### Built-in APIs

```tsx
import { headers, cookies } from "next/headers";

export default async function Page() {
	const headersList = await headers();
	const cookieStore = await cookies();
	// ...
}
```

## 🎯 Learning Path

1. Start with **Server Components** (`/ssr`) to understand server-side rendering
2. Move to **Client Components** (`/csr`) to learn about interactivity
3. Explore **Mixed Components** (`/mixed`) to see how they work together
4. Learn **Server Actions** (`/server-actions`) for form handling
5. Understand **API Routes** (`/api-demo`) for traditional REST APIs
6. Master **Built-in APIs** (`/built-in-apis`) for advanced features

## 🔧 Built With

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## 🎨 Features

- ✅ Dark mode support
- ✅ Responsive design
- ✅ Interactive examples
- ✅ Real API integrations
- ✅ Form handling demos
- ✅ Cookie management
- ✅ URL parameter handling

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
