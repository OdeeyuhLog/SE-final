"use client";

import Link from "next/link";
import SignInForm from "./SignInForm";
import icon from "../../public/Adu org hub logo.png";
import Image from "next/image";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
	return (
		<div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
			<div className="flex flex-col space-y-2 text-center">
				<Image src={icon} alt="icon" className="mx-auto h-10 w-auto" />
				<h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
				<p className="text-sm max-w-xs mx-auto">
					By continuing, you are setting up an AduOrgHub account and agree to
					our User Agreement and Privacy Policy.
				</p>
			</div>
			<SignInForm />
			<p className="px-8 text-center text-sm text-muted-foreground">
				New to AduOrgHub?{" "}
				<Link
					href="/sign-up"
					className="hover:text-brand text-sm underline underline-offset-4"
				>
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default SignIn;
