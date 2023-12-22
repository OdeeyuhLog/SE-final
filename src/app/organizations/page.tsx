"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo1 from "../../../public/ORGS/Adamson Computer Science Students Society(ACOMSS).jpg";
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

const Page = async () => {
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
				{images.map((image, index) => (
					<div
						className="bg-zinc-100 h-15 w-full py-3 px-4 flex gap-3 rounded-md shadow"
						key={index}
					>
						<Image
							className="h-4 w-4 rounded-sm"
							src={images[index]}
							alt="orgpic"
						/>
						<div>
							<h1 className="font-semibold text-zinc-900">
								`${orgNames[index]}`
							</h1>
							<Button
								onClick={() => {
									router.push("");
								}}
							>
								View
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
