import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { nanoid } from "nanoid";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/sign-in",
	},
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const user = await db.user.findUnique({
					where: {
						email: credentials?.email,
					},
				});

				if (!user) {
					return null;
				}

				if (!credentials?.password) {
					return null;
				}

				const passwordsMatch = await bcrypt.compare(
					credentials.password,
					user.password ?? "",
				);
				if (!passwordsMatch) {
					console.log("Passwords don't match");
					return null;
				}

				return user;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async session({ token, session }) {
			if (token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
				session.user.username = token.username;
			}

			return session;
		},

		async jwt({ token, user }) {
			const dbUser = await db.user.findFirst({
				where: {
					email: token.email,
				},
			});

			if (!dbUser) {
				token.id = user!.id;
				return token;
			}

			if (!dbUser.username) {
				await db.user.update({
					where: {
						id: dbUser.id,
					},
					data: {
						username: nanoid(10),
					},
				});
			}

			return {
				id: dbUser.id,
				name: dbUser.name,
				email: dbUser.email,
				picture: dbUser.image,
				username: dbUser.username,
			};
		},
		redirect() {
			return "/";
		},
	},
};

export const getAuthSession = () => getServerSession(authOptions);
