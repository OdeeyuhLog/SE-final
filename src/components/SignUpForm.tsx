"use client";

import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../components/Form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
	username: z.string().min(1, "Username is required").max(100),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Invalid email")
		.refine(
			(data) => data.endsWith("@adamson.edu.ph"),
			"Must use an Adamson University  Email",
		),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have atleast 8 characters"),
});

const SignUpForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof FormSchema>) => {
		const response = await fetch("/api/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: values.username,
				email: values.email,
				password: values.password,
			}),
		});

		if (response.ok) {
			router.push("/sign-in");
		} else {
			console.error("Registration failed");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<div className="space-y-2">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="johndoe" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="mail@example.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Enter your password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button className="w-full mt-6" type="submit">
					Sign up
				</Button>
			</form>
		</Form>
	);
};

export default SignUpForm;
