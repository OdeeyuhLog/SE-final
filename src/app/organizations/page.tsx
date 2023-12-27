"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo1 from "../../../public/ORGS/Adamson Computer Science Students Society (ACOMSS).jpg";
import logo2 from "../../../public/ORGS/Adamson University and St. Vincent School of Theology(AdUSVST SOPHIA).jpg";
import logo3 from "../../../public/ORGS/Adamson University Biology Society (AUBS).jpg";
import logo4 from "../../../public/ORGS/Adamson University Chemical Engineering Student Society (ADUCHESS).jpg";
import logo5 from "../../../public/ORGS/Adamson University Chemical Society (AUCS).jpg";
import logo6 from "../../../public/ORGS/Adamson University Computer Engineering Society (ACOES).jpg";
import logo7 from "../../../public/ORGS/Adamson University Electrical Engineering Student Society (AUEESS).jpg";
import logo8 from "../../../public/ORGS/Adamson University Electronics and Communications Engineering Students Society (AUECESS).jpg";
import logo9 from "../../../public/ORGS/Adamson University Information Technology and Management Society (AdU-IT _ M Society).jpg";
import logo10 from "../../../public/ORGS/Adamson University Junior Marketing Association (ADJMA).jpg";
import logo11 from "../../../public/ORGS/Adamson University Mechanical Engineering Society (AUMES).jpg";
import logo12 from "../../../public/ORGS/Adamson University Mining Engineering and Geology Association (AUMEGA).jpg";
import logo13 from "../../../public/ORGS/Adamson University Psychological Society (AUPS).jpg";
import logo14 from "../../../public/ORGS/Adamson University Student Nurses’ Association (AUSNA).jpg";
import logo15 from "../../../public/ORGS/Adamson University Young Educators Association (AUYEA).jpg";
import logo16 from "../../../public/ORGS/Adamson University-Association of Civil Engineering Students (ADU-ACES).jpg";
import logo17 from "../../../public/ORGS/AdU-PULITIKA.jpg";
import logo18 from "../../../public/ORGS/Association of Hospitality Management Students (AHMS).jpg";
import logo19 from "../../../public/ORGS/Creative Communicators Society of Adamson University (CreaComms).jpg";
import logo20 from "../../../public/ORGS/Federation of Junior Chapters of the Philippine Pharmacists Association - Rho Chapter.jpg";

const Page = () => {
	const router = useRouter();

	const images: string[] = [
		"../../../public/ORGS/Adamson Computer Science Students Society(ACOMSS).jpg",
		"../../../public/ORGS/Adamson University and St. Vincent School of Theology(AdUSVST SOPHIA).jpg",
		"../../../public/ORGS/Adamson University Biology Society (AUBS).jpg",
		"../../../public/ORGS/Adamson University Chemical Engineering Student Society (ADUCHESS).jpg",
		"../../../public/ORGS/Adamson University Chemical Society (AUCS).jpg",
		"../../../public/ORGS/Adamson University Computer Engineering Society (ACOES).jpg",
		"../../../public/ORGS/Adamson University Electrical Engineering Student Society (AUEESS).jpg",
		"../../../public/ORGS/Adamson University Electronics and Communications Engineering Students Society (AUECESS).jpg",
		"../../../public/ORGS/Adamson University Information Technology and Management Society (AdU-IT _ M Society).jpg",
		"../../../public/ORGS/Adamson University Junior Marketing Association (ADJMA).jpg",
		"../../../public/ORGS/Adamson University Mechanical Engineering Society (AUMES).jpg",
		"../../../public/ORGS/Adamson University Mining Engineering and Geology Association (AUMEGA).jpg",
		"../../../public/ORGS/Adamson University Psychological Society (AUPS).jpg",
		"../../../public/ORGS/Adamson University Student Nurses’ Association (AUSNA).jpg",
		"../../../public/ORGS/Adamson University Young Educators Association (AUYEA).jpg",
		"../../../public/ORGS/Adamson University-Association of Civil Engineering Students (ADU-ACES).jpg",
		"../../../public/ORGS/AdU-PULITIKA.jpg",
		"../../../public/ORGS/Association of Hospitality Management Students (AHMS).jpg",
		"../../../public/ORGS/Creative Communicators Society of Adamson University (CreaComms).jpg",
		"../../../public/ORGS/Federation of Junior Chapters of the Philippine Pharmacists Association - Rho Chapter.jpg",
	];

	const orgNames: string[] = images.map((image) => {
		const parts = image.split("/");
		let imageName = parts[parts.length - 1];
		imageName = imageName.replace(".jpg", "");
		return imageName;
	});

	return (
		<div>
			<h1 className="my-2">Organizations</h1>
			<div className="grid grid-cols-4 auto-rows-auto w-full h-full gap-6 ">
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo1}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">ACOMSS</h1>
						<Button
							onClick={() => {
								router.push("/r/ACOMSS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo2}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AdU-SVST SOPHIA</h1>
						<Button
							onClick={() => {
								router.push("/r/SOPHIA");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo3}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUBS</h1>
						<Button
							onClick={() => {
								router.push("/r/AUBS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo4}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AdUChESS</h1>
						<Button
							onClick={() => {
								router.push("/r/AdUChESS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo5}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUCS</h1>
						<Button
							onClick={() => {
								router.push("/r/AUCS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo6}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">ACOES</h1>
						<Button
							onClick={() => {
								router.push("/r/ACOES");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo7}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUEESS</h1>
						<Button
							onClick={() => {
								router.push("/r/AUEESS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo8}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUECESS</h1>
						<Button
							onClick={() => {
								router.push("/r/AUECESS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo9}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AdU-IT&M</h1>
						<Button
							onClick={() => {
								router.push("/r/ADUITM");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo10}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">ADJMA</h1>
						<Button
							onClick={() => {
								router.push("/r/ADJMA");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo11}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUMES</h1>
						<Button
							onClick={() => {
								router.push("/r/AUMES");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo12}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUMEGA</h1>
						<Button
							onClick={() => {
								router.push("/r/AUMEGA");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo13}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUPS</h1>
						<Button
							onClick={() => {
								router.push("/r/AUPS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo14}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUSNA</h1>
						<Button
							onClick={() => {
								router.push("/r/AUSNA");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo15}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AUYEA</h1>
						<Button
							onClick={() => {
								router.push("/r/AUYEA");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo16}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">ADU-ACES</h1>
						<Button
							onClick={() => {
								router.push("/r/ADU-ACES");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo17}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AdU-PULITIKA</h1>
						<Button
							onClick={() => {
								router.push("/r/AdU-PULITIKA");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo18}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">AHMS</h1>
						<Button
							onClick={() => {
								router.push("/r/AHMS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo19}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">CREACOMMS</h1>
						<Button
							onClick={() => {
								router.push("/r/CREACOMMS");
							}}
						>
							View
						</Button>
					</div>
				</div>
				<div className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow">
					<Image
						className="h-12 w-auto rounded-full"
						src={logo20}
						width={300}
						height={300}
						alt="orgpic"
					/>
					<div>
						<h1 className="font-semibold text-zinc-900">JPPhA-RC</h1>
						<Button
							onClick={() => {
								router.push("/r/JPPhA-RC");
							}}
						>
							View
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
