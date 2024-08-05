"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function HomePage() {
	const router = useRouter();
	useEffect(() => {
		router.push("/users");
	}, []);

	return null;
}

export default HomePage;
