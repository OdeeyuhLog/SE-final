import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";
import SearchBar from "./SearchBar";
import Image from "next/image";
import logo from "../../public/Adu org hub logo.png";

const Navbar = async () => {
	const session = await getServerSession(authOptions);
	return (
		<div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
			<div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
				{/* logo */}
				<Link href="/" className="flex gap-2 items-center">
					<Image src={logo} alt="logo" className="h-10 w-auto" />
					<p className="hidden text-zinc-700 text-sm font-medium md:block">
						AduOrgHub
					</p>
				</Link>

				<Link href="/organizations" className="relative right-8">
					<p className="text-zinc-700 text-sm font-medium md:block">
						Organizations
					</p>
				</Link>

				{/* search bar */}
				<SearchBar />

				{/* actions */}
				{session?.user ? (
					<UserAccountNav user={session.user} />
				) : (
					<Link href="/sign-in" className={buttonVariants()}>
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
