"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
	children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}

	return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
