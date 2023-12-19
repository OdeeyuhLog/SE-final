import Image from "next/image";

const orgPage = async () => {
	return (
		<div>
			<h1 className="my-2">Organizations</h1>
			<div className="grid grid-cols-4 auto-rows-auto w-full h-full gap-6 ">
				<div className="bg-zinc-200 h-15 w-full py-3 px-4 flex gap-3 rounded-md">
					<Image className="h-4 w-4 rounded-sm" alt="orgpic" />
					<div>
						<h1 className="font-semibold text-zinc-900">Title</h1>
						<p>Description</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default orgPage;
