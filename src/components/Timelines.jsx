import { PiStarFourFill } from "react-icons/pi";
import Timeline from "./Timeline";

const timelines = [
	{
		title: "hackathon announcement",
		about: `The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register`,
		date: "November 18, 2023",
	},
	{
		title: "Teams Registration begins",
		about: `Interested teams can now show their interest 
        in the getlinked tech hackathon 1.0 2023 by 
        proceeding to register`,
		date: "November 18, 2023",
	},
	{
		title: "Teams Registration ends",
		about: `Interested Participants are no longer Allowed
        to register`,
		date: "November 18, 2023",
	},
	{
		title: "Announcement of the accepted teamsand ideas",
		about: `All teams whom idea has been accepted into 
        getlinked tech hackathon 1.0 2023 are formally 
        announced`,
		date: "November 18, 2023",
	},
	{
		title: "Getlinked Hackathon 1.0 Offically Begins",
		about: `Accepted teams can now proceed to build 
        their ground breaking skill driven solutions`,
		date: "November 18, 2023",
	},
	{
		title: "Demo Day",
		about: `
        Teams get the opportunity to pitch their 
        projects to judges. The winner of the 
        hackathon will also be announced on this day`,
		date: "November 18, 2023",
	},
];

const Timelines = () => {
	return (
		<section id="timeline" className="">
			<div className="text-center">
				<h1 >Timeline</h1>
				<p>
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
			</div>
			<div className="relative max-w-4xl mx-auto space-y-6 md:space-y-2 pt-10 md:pt-32 ">
				<PiStarFourFill className=" absolute top-4 left-8  lg:w-6 lg:h-6 fill-lightPurple" />
				<PiStarFourFill className=" absolute left-24 top-[50%] lg:w-6 lg:h-6 fill-gray-600" />
				<PiStarFourFill className=" absolute -bottom-4 -left-4 lg:w-6 lg:h-6 fill-gray-700 w-3 h-3" />
				{timelines.map((t, i) => (
					<Timeline data={t} index={i} />
				))}
			</div>
		</section>
	);
};

export default Timelines;
