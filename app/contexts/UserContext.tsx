"use client";

import { createContext, useContext, ReactNode, useState } from "react";

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
}

interface UserContextType {
	user: User;
	allUsers: User[];
	setCurrentUser: (userId: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({
	children,
	initialUser,
	allUsers = [],
}: {
	children: ReactNode;
	initialUser: User;
	allUsers?: User[];
}) {
	const [currentUser, setUser] = useState<User>(initialUser);

	const setCurrentUser = (userId: number) => {
		const user = allUsers.find((u) => u.id === userId);
		if (user) {
			setUser(user);
		}
	};

	return (
		<UserContext.Provider
			value={{ user: currentUser, allUsers, setCurrentUser }}
		>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}
