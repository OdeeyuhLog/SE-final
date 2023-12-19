"use client";

import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import SignUpForm from "./SignUpForm";
import Image from "next/image";
import icon from "../../public/Adu org hub logo.png";

const SignUp = () => {
	return (
		<div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
			<div className="flex flex-col space-y-2 text-center">
				<Image src={icon} alt="icon" className="mx-auto h-10 w-auto" />
				<h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
				<p className="text-sm max-w-xs mx-auto">
					By continuing, you are setting up a AduOrgHub account and agree to our
					User Agreement and Privacy Policy.
				</p>
			</div>
			<SignUpForm />
			<UserAuthForm />
			<p className="px-8 text-center text-sm text-muted-foreground">
				Already a user?{" "}
				<Link
					href="/sign-in"
					className="hover:text-brand text-sm underline underline-offset-4"
				>
					Sign in
				</Link>
			</p>
		</div>
	);
};

export default SignUp;
