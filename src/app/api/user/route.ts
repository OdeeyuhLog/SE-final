import { db } from "@/lib/db";
import { UserFormSchema } from "@/lib/validators/userform";
import { hash } from "bcrypt";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, username, password } = UserFormSchema.parse(body);

		const existingUserByEmail = await db.user.findUnique({
			where: { email: email },
		});

		if (existingUserByEmail) {
			return Response.json(
				{ user: null, message: "User with this email already exists" },
				{ status: 409 },
			);
		}

		const existingByUserName = await db.user.findUnique({
			where: {
				username: username,
			},
		});

		if (existingByUserName) {
			return Response.json(
				{ user: null, message: "User with this name already exists" },
				{ status: 409 },
			);
		}

		const hashedPassword = await hash(password, 10);

		const newUser = await db.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		const { password: newUserPassword, ...rest } = newUser;

		return Response.json(
			{ user: newUser, message: "User created successfully" },
			{ status: 201 },
		);
	} catch (error) {
		return Response.json({ message: "Something went wrong" }, { status: 500 });
	}
}
