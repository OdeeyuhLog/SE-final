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
						<p>
							Adamson Computer Science Students Society (ACOMSS) is a recognized
							academic organization of Adamson University focused mostly on
							internal and external affairs of Computer Science, also serving as
							the governing body for Computer Science students at Adamson
							University.
						</p>
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
						<p>
							Adamson University-St. Vincent School of Theology Students of
							Philosophy Association (AdU-SVST SOPhiA) is a recognized academic
							organization which aims to dedicate itself to studying Philosophy
							and promoting the holistic formation of its students to become
							catalysts of social change. In SVST, a semi-autonomous
							institution, students of philosophy are able to partake in their
							activities that enhance integral individual life. The organization
							also aims to integrate academic ventures into society, in line
							with the SVST slogan, "Philosophizing Beyond the Walls".
						</p>
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
						<p>
							Adamson University Biology Society (AUBS) is a non-sectarian
							academic organization that aims to promote camaraderie and
							goodwill among Bachelor of Science in Biology students at Adamson
							University, thus fostering cooperation and readiness to serve.
						</p>
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
						<p>
							Adamson University Chemical Engineering Students' Society
							(AdUChESS) is an academic and non-profit student organization
							composed of Bachelor of Science in Chemical Engineering and
							Chemical Process Technology students at Adamson University.
							AdUChESS envisions to be an academic and non-profit student
							organization that fosters responsible, competent, productive and
							God-fearing chemical engineers.
						</p>
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
						<p>
							Adamson University Chemical Society (AUCS) is a recognized
							academic organization of Adamson University which inspires
							students to be good leaders with a Vincentian spirit. It is one of
							the oldest organizations in the University, established in 1954.
							Since then, it has been a catalyst of change among its
							constituents. AUCS has also produced notable chemists in many
							fields and different industries. Currently, it is still playing an
							integral part in the formation of young chemists to become
							well-rounded individuals and excellent professionals that are
							globally competitive and socially responsible in the scientific
							community and their respective communities.
						</p>
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
						<p>
							The Adamson Computer Engineering Society is a recognized student
							organization serving as the governing body for Computer
							Engineering students at Adamson University. It envisions
							cultivating members who will emerge as competent and responsible
							future professionals, grounded in Vincentian values. The
							organization strives for academic, environmental, and ethical
							literacy among its members, fostering individuals dedicated to
							pursuing quality, excellence, and a passion for knowledge.
							Additionally, the organization seeks to establish a competitive
							and secure community that prioritizes the development and
							well-being of its students.
						</p>
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
						<p></p>
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
						<p>
							Adamson University Electronics Engineering Students Society
							(AUECESS) is a recognized academic organization that continues to
							be a venue for Electronics Engineering (ECE) students in promoting
							academic excellence for the benefit of the entire ECE community.
							The organization has also been providing opportunities for
							improvement of its student leaders particularly on effective,
							efficient, and transparent leadership.
						</p>
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
						<p>
							Adamson University Information Technology & Information Systems
							Society is a recognized student organization that assists in the
							holistic transformation of Information Technology and information
							Systems students at the University. AdU IT&IS Society’s members
							are expected to promote Vincentian education and ideals by
							providing activities that practice academic development, social
							responsibility and camaraderie.
						</p>
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
						<p>
							The Adamson Junior Marketing Association (AdJMA) is a non-profit
							academic student organization duly recognized by the Office for
							Student Affairs of Adamson University since 2001. Furthermore,
							AdJMA is an accredited local marketing organization of its mother
							and national organization, the Philippine Junior Marketing
							Association (PJMA).
						</p>
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
						<p>
							Adamson University Mechanical Engineering Society (AUMES) is a
							recognized academic student organization for Mechanical
							Engineering students at Adamson University. AUMES seeks to
							maintain close relationship with its members and to the Filipino
							community through understanding their needs and lead a path of
							exemplary and ethical professional practice through camaraderie
							and quality education.
						</p>
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
						<p>
							The Adamson University Mining Engineering and Geology Association
							(AUMEGA) is the only academic organization in the university that
							is solely dedicated to Mining Engineering and Geology students.
							The organization was established in the year 2009 under the
							accredited name Adamson University Mining, Geology and Ceramic
							Society. However, as the number of Ceramic Engineering students
							decreased to zero, the organization shifted to its present name in
							2011. It was then the start of its annual growth in population
							especially in Geology with a combined population of at least 350.
						</p>
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
						<p>
							We, the members of Adamson University Psychological Society,
							uphold the organization’s Mission and Vision by uniting in the
							spirit of mutual respect, trust and assistance. Thus, we maintain
							the standards and aspirations of being a Vincentian Psychology
							student in order to promote excellence, compassion, and
							solidarity. Do hereby ordain and promulgate this constitution.
						</p>
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
						<p>
							Adamson University Student Nurses' Association (AUSNA) is a
							constituent body of the Recognized Student Organization of Adamson
							University. AUSNA's primary objective is to foster empowerment, a
							sense of unity and cooperation among the entire Vincentian Nursing
							community. Through its activities, AUSNA contributes to the
							development of the College of Nursing's students by assisting in
							shaping their identity as Vincentian Nurses to make positive
							contributions to the world as individuals and as members of a
							larger nursing community.
						</p>
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
						<p>
							Adamson University Young Educators Association (AUYEA) is an
							academic recognized student organization composed of education
							students that embody the organization’s aim of creating ideas and
							goals, promoting prospective teachers’ competitiveness, rights,
							and welfare, instilling national consciousness and social
							commitment for the advancement of Filipino people and developing
							excellence in leadership and teaching for the betterment of the
							education system in the future.
						</p>
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
						<p>
							Adamson University's Association of Civil Engineering Students
							(AdU-ACES) is a distinguished organization founded in 1975. With
							over a thousand members as of the current academic year, it stands
							as one of the leading recognized student organizations within the
							institution. AdU-ACES is committed to promoting excellence through
							various activities designed to unlock the full potential of its
							engineers and nurture visionary leaders for the future.
						</p>
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
						<p>
							The Adamson University - Political Science Students United in
							Living-Out Its Identity of Truth, Integrity, Knowledge, and
							Academic Supremacy (AdU-PULITIKA) was established in 2011.
						</p>
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
						<p>
							The Adamson Hospitality Management Students (AHMS) is the
							recognized student organization of the Hospitality Management
							Department of Adamson University. Established in 2008, the
							organization routinely organizes events for Hospitality Management
							students over the course of its 15 years of operation. As
							Vincentian leaders, it advocates to strengthen students’ skills
							and their professional advancement in the hospitality industry by
							giving them access to events and opportunities. The Adamson
							Hospitality Management Students (AHMS) is a non-profit
							organization at Adamson University dedicated to fostering the
							growth and development of students pursuing studies in Hospitality
							Management. This organization offers various activities, events,
							and opportunities that enhance members’ understanding of the
							hospitality industry, providing them with skill-building and
							educational experiences.
						</p>
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
						<p>
							The Creative Communicators Society of Adamson University
							(CreaCommS) is a recognized student organization at Adamson
							University that envisions to be an instrument towards the
							development of transformative individuals who will be future media
							practitioners in all fields of Communication, valuing a deep sense
							of integrity, truthfulness and modesty. The organization aids to
							mold students to be God-fearing, socially oriented and stewards of
							God's given gifts.
						</p>
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
						<p>
							Junior Philippine Pharmacists’ Association - Rho Chapter
							(JPPhA-RC) is a non-profit academic organization that represents
							the students at Adamson University College of Pharmacy, with the
							goal of providing holistic development and social transformation
							and promoting globally competitive pharmacy students equipped with
							necessary skills and imbued with morals and passion.
						</p>
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
