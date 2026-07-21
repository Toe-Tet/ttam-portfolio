"use client";

import { useEffect, useState, useRef } from "react";
import AsciiArt from "@/components/AsciiArt";
import {
	Zap,
	Braces,
	Database,
	Code2,
	Layers,
	Atom,
	Cloud,
	Package,
	ExternalLink,
} from "lucide-react";

function useFadeInUp(delay: number = 0, isLoadingDone: boolean = true) {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isLoadingDone) return;

		let timeoutId: NodeJS.Timeout | null = null;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					timeoutId = setTimeout(() => {
						setIsVisible(true);
					}, delay);
				} else {
					if (timeoutId) clearTimeout(timeoutId);
					setIsVisible(false);
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			observer.observe(ref.current);
			// Check if already intersecting on mount
			const isIntersecting = observer
				.takeRecords()
				.some((record) => record.isIntersecting);
			if (isIntersecting) {
				timeoutId = setTimeout(() => {
					setIsVisible(true);
				}, delay);
			}
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [delay, isLoadingDone]);

	return { ref, isVisible };
}

function FadeInUp({
	children,
	delay = 0,
	isLoadingDone = true,
	className = "",
}: Readonly<{
	children: React.ReactNode;
	delay?: number;
	isLoadingDone?: boolean;
	className?: string;
}>) {
	const { ref, isVisible } = useFadeInUp(delay, isLoadingDone);
	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`fade-in-up ${isVisible ? "visible" : ""} ${className}`}
		>
			{children}
		</div>
	);
}

function useFadeInLeft(delay: number = 0, isLoadingDone: boolean = true) {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		console.log("useFadeInLeft useEffect running", {
			isLoadingDone,
			ref: ref.current,
		});
		if (!isLoadingDone) return;

		let timeoutId: NodeJS.Timeout | null = null;

		const observer = new IntersectionObserver(
			([entry]) => {
				console.log("useFadeInLeft intersection observer", {
					isIntersecting: entry.isIntersecting,
				});
				if (entry.isIntersecting) {
					timeoutId = setTimeout(() => {
						setIsVisible(true);
					}, delay);
				} else {
					if (timeoutId) clearTimeout(timeoutId);
					setIsVisible(false);
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			console.log("useFadeInLeft observing ref");
			observer.observe(ref.current);
			// Check if already intersecting on mount
			const records = observer.takeRecords();
			console.log("useFadeInLeft takeRecords", records);
			const isIntersecting = records.some(
				(record) => record.isIntersecting,
			);
			if (isIntersecting) {
				console.log("useFadeInLeft already intersecting");
				timeoutId = setTimeout(() => {
					setIsVisible(true);
				}, delay);
			}
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [delay, isLoadingDone]);

	console.log("useFadeInLeft returning", { isVisible });
	return { ref, isVisible };
}

function FadeInLeft({
	children,
	delay = 0,
	isLoadingDone = true,
	className = "",
}: Readonly<{
	children: React.ReactNode;
	delay?: number;
	isLoadingDone?: boolean;
	className?: string;
}>) {
	const { ref, isVisible } = useFadeInLeft(delay, isLoadingDone);
	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`fade-in-left ${isVisible ? "visible" : ""} ${className}`}
		>
			{children}
		</div>
	);
}

function useFadeInRight(delay: number = 0, isLoadingDone: boolean = true) {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isLoadingDone) return;

		let timeoutId: NodeJS.Timeout | null = null;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					timeoutId = setTimeout(() => {
						setIsVisible(true);
					}, delay);
				} else {
					if (timeoutId) clearTimeout(timeoutId);
					setIsVisible(false);
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			observer.observe(ref.current);
			// Check if already intersecting on mount
			const isIntersecting = observer
				.takeRecords()
				.some((record) => record.isIntersecting);
			if (isIntersecting) {
				timeoutId = setTimeout(() => {
					setIsVisible(true);
				}, delay);
			}
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [delay, isLoadingDone]);

	return { ref, isVisible };
}

function FadeInRight({
	children,
	delay = 0,
	isLoadingDone = true,
	className = "",
}: Readonly<{
	children: React.ReactNode;
	delay?: number;
	isLoadingDone?: boolean;
	className?: string;
}>) {
	const { ref, isVisible } = useFadeInRight(delay, isLoadingDone);
	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`fade-in-right ${isVisible ? "visible" : ""} ${className}`}
		>
			{children}
		</div>
	);
}

type ExperienceEntry = {
	title: string;
	subtitle: string;
	period: string;
	summary: string;
	tags: string[];
	url?: string;
	roleLabel?: string;
	sideNote?: string;
	highlights: Array<{
		label: string;
		detail: string;
	}>;
};

function getExperienceSortValue(period: string) {
	const [startRaw] = period.split(" - ");
	const parsedDate = Date.parse(`${startRaw} 1`);

	return Number.isNaN(parsedDate) ? 0 : parsedDate;
}

const typingPhrases = [
	"Full-Stack Development",
	"Scalable Backend Architecture",
	"High-Performance Applications",
];

const stats = [
	{ label: "Experience", value: "8+ Years" },
	{ label: "Focus", value: "Full-Stack" },
	{ label: "Stack", value: "NestJs / NextJs" },
];

const floatingBadges = [
	{ text: "API", top: "12%", left: "7%", delay: "0s", icon: Zap },
	{ text: "TS", top: "20%", right: "10%", delay: "1.1s", icon: Braces },
	{ text: "SQL", bottom: "25%", left: "8%", delay: "2.2s", icon: Database },
	{ text: "JS", bottom: "18%", right: "12%", delay: "0.7s", icon: Code2 },
	{ text: "NestJS", top: "35%", left: "5%", delay: "1.6s", icon: Layers },
	{ text: "React", top: "40%", right: "8%", delay: "2.8s", icon: Atom },
	{ text: "AWS", bottom: "10%", left: "15%", delay: "3.3s", icon: Cloud },
	{
		text: "Docker",
		bottom: "5%",
		right: "10%",
		delay: "3.8s",
		icon: Package,
	},
];

const terminalLines = [
	"> about --me",
	"Dedicated Software Engineer with 8 years of software engineering experience specializing in scalable backend architecture, distributed systems, and high-performance web applications.",
	" Backed by a strong background leading technical teams and engineering enterprise multi-tenant SaaS platforms with secure database isolation in previous Full Stack roles, experienced in AI-assisted software development to accelerate development. ",
	"Proven in designing Nx monorepos, delivering encrypted payment integrations, and utilizing AWS infrastructure, with a documented ability to translate complex business requirements into high-performance production code. ",
	"Open to challenging opportunities and continuous learning.",
];

const aboutHighlights = [
	{
		label: "Backend Systems",
		value: "Scalable backend architecture, microservices, and high-performance web applications.",
	},
	{
		label: "SaaS Platforms",
		value: "Enterprise multi-tenant SaaS delivery with secure database isolation and production-ready design.",
	},
	{
		label: "Execution",
		value: "Nx monorepos, encrypted payment integrations, utilizing AWS infrastructure, and fast iteration with AI-assisted workflows.",
	},
];

const skillGroups = [
	{
		label: "Languages",
		accent: "border border-cyan-300/45 bg-slate-950/82 p-4 shadow-[8px_8px_0_rgba(244,114,182,0.18)] backdrop-blur-sm",
		items: ["TypeScript", "JavaScript", "PHP", "SQL"],
	},
	{
		label: "Backend",
		accent: "border border-lime-300/45 bg-slate-950/82 p-4 shadow-[6px_6px_0_rgba(163,230,53,0.28)] backdrop-blur-sm",
		items: ["Node.js", "NestJS", "Express.js", "Laravel", "PHP"],
	},
	{
		label: "Frontend",
		accent: "border border-fuchsia-400/45 bg-slate-950/82 p-4 shadow-[6px_6px_0_rgba(244,114,182,0.38)] backdrop-blur-sm",
		items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
	},
	{
		label: "Databases & Caching",
		accent: "border border-cyan-300/45 bg-slate-950/82 p-4 shadow-[6px_6px_0_rgba(244,114,182,0.28)] backdrop-blur-sm",
		items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
	},
	{
		label: "Cloud & DevOps",
		accent: "border border-lime-300/45 bg-slate-950/82 p-4 shadow-[6px_6px_0_rgba(34,211,238,0.35)] backdrop-blur-sm",
		items: ["AWS", "GCP", "Docker", "Nginx", "Linux", "Git"],
	},
	{
		label: "Tools & Architecture",
		accent: "border border-fuchsia-400/45 bg-slate-950/82 p-4 shadow-[6px_6px_0_rgba(34,211,238,0.26)] backdrop-blur-sm",
		items: ["Microservices", "Nx", "Jest", "Pusher", "k6"],
	},
];

const workExperiences: ExperienceEntry[] = [
	{
		title: "Backend Developer",
		subtitle: "Young Investment Group (Fintech)",
		period: "Nov 2020 - Jun 2024",
		summary:
			"Architected a high-performance fintech SaaS ecosystem using NestJS and NextJS with multi-tenant database isolation, shared platform services, and leadership across backend and frontend delivery.",
		tags: [
			"NestJS",
			"Next.js",
			"Multi-tenant SaaS",
			"Authentication",
			"Authorization",
			"Chat Microservice",
			"Team Leadership",
			"Fintech",
		],
		roleLabel: "Previous Position",
		sideNote:
			"Architected multi-tenant fintech systems, mentored junior developers, and translated product requirements into scalable backend and frontend delivery.",
		highlights: [
			{
				label: "Architecture",
				detail: "Architected a high-performance SaaS ecosystem using NestJS and NextJS, featuring a sophisticated multi-tenant architecture with isolated database connections for data security and scalability.",
			},
			{
				label: "Leadership",
				detail: "Led and mentored a cross-functional team of 4 junior developers, overseeing the full-cycle development of core backend services and frontend interfaces, resulting in a 20% increase in team delivery velocity.",
			},
			{
				label: "Platform Services",
				detail: "Directed the design and deployment of centralized infrastructure, including a unified Authentication/Authorization service and a real-time Chat microservice to support cross-tenant communication.",
			},
			{
				label: "Stakeholder Collaboration",
				detail: "Collaborated directly with Project Managers and Stakeholders to define system flows, gather technical requirements, and translate business logic into robust system specifications.",
			},
			{
				label: "Stability & Delivery",
				detail: "Improved platform stability by reducing bugs and optimizing existing codebases, ensuring a smoother transition from development to production deployment.",
			},
		],
	},
	{
		title: "Software Engineer",
		subtitle: "Onenex (Software House)",
		period: "Nov 2024 - Present",
		summary:
			"Building scalable backend systems in an Nx monorepo with NestJS, Node.js, AWS-hosted workloads, strong security practices, and performance-focused delivery.",
		tags: [
			"NestJS",
			"TypeScript",
			"Nx Monorepo",
			"PostgreSQL",
			"AWS",
			"RedLock",
			"BullMQ",
			"BullBoard",
			"Redis",
			"k6",
			"GitLab",
			"Jest",
			"TypeORM",
			"JWT",
			"Refresh Token",
			"Microservices",
		],
		roleLabel: "Current Position",
		sideNote:
			"Leading backend-focused delivery across platform architecture, payment security, concurrency control, analytics, and performance validation.",
		highlights: [
			{
				label: "Architecture & Scalability",
				detail: "Built and scaled backend systems using NestJS and Node.js inside an Nx monorepo, working with AWS EC2-hosted applications and gaining familiarity with AWS Lambda. Designed RESTful APIs with Swagger/OpenAPI for clear documentation and team collaboration, used TypeORM for efficient data-access management, and accelerated delivery with AI-assisted coding tools.",
			},
			{
				label: "Security & Access Control",
				detail: "Integrated 2C2P with advanced cryptographic standards including AES and PGP, and supported synchronization between mobile and backend states through custom error-handling frameworks. Used Teleport for secure access and followed team Git branching strategies to keep deployment workflows clean and controlled.",
			},
			{
				label: "Performance",
				detail: "Improved reliability and response times with Jest-based test suites, Redis caching strategies, and RedLock distributed locking to reduce database load and support concurrency-heavy workloads. Ran k6 load tests to validate behavior under heavy traffic and target 99.9% uptime.",
			},
			{
				label: "Analytics & Reporting",
				detail: "Enhanced data-driven decision-making by integrating Google Analytics 4 and custom reporting dashboards for event management portals.",
			},
		],
	},
	{
		title: "Senior Full Stack Developer",
		subtitle: "O-Technique (Construction Industry)",
		period: "Nov 2020 - Jun 2024",
		summary:
			"Led full-stack SaaS delivery for the construction industry with NestJS and NextJS, multi-tenant architecture, shared platform services, and team leadership across backend and frontend execution.",
		tags: [
			"NestJS",
			"Next.js",
			"Multi-tenant SaaS",
			"Authentication",
			"Authorization",
			"Chat Microservice",
			"Team Leadership",
			"Construction Industry",
		],
		roleLabel: "Previous Position",
		sideNote:
			"Architected multi-tenant SaaS systems, mentored junior developers, and collaborated closely with stakeholders to deliver stable backend and frontend products.",
		highlights: [
			{
				label: "Architecture",
				detail: "Architected a high-performance SaaS ecosystem using NestJS and NextJS, featuring a sophisticated multi-tenant architecture with isolated database connections for data security and scalability.",
			},
			{
				label: "Leadership",
				detail: "Led and mentored a cross-functional team of 4 junior developers, overseeing the full-cycle development of core backend services and frontend interfaces, resulting in a 20% increase in team delivery velocity.",
			},
			{
				label: "Platform Services",
				detail: "Directed the design and deployment of centralized infrastructure, including a unified Authentication/Authorization service and a real-time Chat microservice to support cross-tenant communication.",
			},
			{
				label: "Stakeholder Collaboration",
				detail: "Collaborated directly with Project Managers and Stakeholders to define system flows, gather technical requirements, and translate business logic into robust system specifications.",
			},
			{
				label: "Stability & Delivery",
				detail: "Improved platform stability by reducing bugs and optimizing existing codebases, ensuring a smoother transition from development to production deployment.",
			},
		],
	},
	{
		title: "Web Developer & IT Associate",
		subtitle: "Uninet (IT Company)",
		period: "Oct 2019 - Jun 2020",
		summary:
			"Directed the end-to-end delivery of diverse CMS and in-house systems, from initial requirement gathering and system architecture to successful production deployment on cPanel and VPS environments.",
		tags: ["PHP", "Laravel", "cPanel", "VPS", "Ubuntu"],
		roleLabel: "Previous Position",
		sideNote: "",
		highlights: [
			{
				label: "Development",
				detail: "Directed the end-to-end delivery of diverse CMS and in-house systems, from initial requirement gathering and system architecture to successful production deployment on cPanel and VPS environments.",
			},
		],
	},
	{
		title: "Junior Web Developer",
		subtitle: "Za Information Technology (IT Company)",
		period: "May 2018 - Sep 2019",
		summary:
			"Enhanced E-commerce and Accounting platforms by resolving critical bugs and implementing new features, while developing and deploying a custom CMS to GCP staging environments.",
		tags: [
			"PHP",
			"Laravel",
			"cPanel",
			"VPS",
			"Ubuntu",
			"GCP",
			"E-Commerce",
		],
		roleLabel: "Previous Position",
		sideNote: "",
		highlights: [
			{
				label: "Development",
				detail: "Enhanced E-commerce and Accounting platforms by resolving critical bugs and implementing new features, while developing and deploying a custom CMS to GCP staging environments.",
			},
		],
	},
	{
		title: "Junior Web Developer",
		subtitle: "Symmetric Information Technology (IT Company)",
		period: "Aug 2017 - Feb 2018",
		summary:
			"Engineered a diverse portfolio of web applications and blog platforms, managing the full deployment lifecycle on cPanel and VPS environments while collaborating with project managers to efficiently handle technical change requests.",
		tags: ["PHP", "Laravel", "cPanel", "VPS", "Ubuntu"],
		roleLabel: "Previous Position",
		sideNote: "",
		highlights: [
			{
				label: "Development",
				detail: "Engineered a diverse portfolio of web applications and blog platforms, managing the full deployment lifecycle on cPanel and VPS environments while collaborating with project managers to efficiently handle technical change requests.",
			},
		],
	},
];

const projectExperiences: ExperienceEntry[] = [
	{
		title: "Loyalty Engine",
		subtitle: "Customer loyalty platform",
		period: "Onenex / Current Company",
		summary:
			"High-volume loyalty infrastructure focused on secure transactions, resilient background processing, and concurrency-safe point operations.",
		url: "https://pocket.com.mm/",
		tags: [
			"NestJS",
			"TypeScript",
			"Nx Monorepo",
			"PostgreSQL",
			"RedLock",
			"BullMQ",
			"BullBoard",
			"Redis",
			"k6",
			"Apache Benchmark",
			"GitLab",
			"Jest",
			"TypeORM",
			"JWT",
			"Refresh Token",
		],
		highlights: [
			{
				label: "Concurrency Management",
				detail: "Integrated RedLock atomic locking to prevent race conditions during point burning and earning, preserving data integrity during high-volume concurrent transactions.",
			},
			{
				label: "Background Processing",
				detail: "Designed a high-throughput queue module using BullMQ, paired with a BullBoard dashboard for real-time job monitoring and retry management.",
			},
			{
				label: "Security Auditing",
				detail: "Handled penetration testing remediation and complex data migrations to move legacy membership data into a new multi-tiered logic system.",
			},
			{
				label: "Performance Engineering",
				detail: "Validated system limits through k6 and Apache Benchmark while optimizing SQL queries and caching strategies to meet strict SLA expectations.",
			},
		],
	},
	{
		title: "2C2P Wave",
		subtitle: "Payment Gateway Proxy",
		period: "Onenex / Current Company",
		summary:
			"Modular payment gateway backend built with clean architecture, secure encryption flows, and strong automated testing.",
		url: "https://www.wavemoney.com.mm/2c2p-wave-app/",
		tags: [
			"NestJS",
			"TypeScript",
			"Nx Monorepo",
			"PostgreSQL",
			"AES",
			"PGP",
			"JWT",
			"Jest",
			"Redis",
			"GitLab",
			"Jest",
			"TypeORM",
			"JWT",
		],
		highlights: [
			{
				label: "Infrastructure",
				detail: "Developed a modular backend using NestJS, PostgreSQL, and Nx with clean architecture across API, Data, Domain, and Utils layers for clear separation of concerns.",
			},
			{
				label: "Security & Encryption",
				detail: "Implemented AES and PGP encryption and decryption for secure communication with 2C2P, and built a JWT-based authentication service integrated across microservices.",
			},
			{
				label: "Scalability",
				detail: "Built a dynamic data module that manages database, Redis, and third-party API connections through runtime configuration so the system can scale horizontally with less friction.",
			},
			{
				label: "Resilience",
				detail: "Reached full SonarQube code-quality compliance and paired it with a custom error-mapping engine that translated provider error codes into actionable mobile-client responses.",
			},
			{
				label: "Testing",
				detail: "Authored unit and integration tests with Jest to protect business logic across frequent deployments.",
			},
		],
	},
	{
		title: "Tikkat",
		subtitle: "Event management platform",
		period: "Onenex / Current Company",
		summary:
			"Event operations platform work spanning form customization, organizer tooling, and analytics visibility for business teams.",
		url: "https://tikkat.com.mm/about-us",
		tags: ["Laravel", "PHP", "GA4", "QR Scanner", "Authorization"],
		highlights: [
			{
				label: "Feature Engineering",
				detail: "Developed a dynamic form builder that enables organizers to define event-specific customer data collection fields.",
			},
			{
				label: "Operations Tooling",
				detail: "Streamlined event entry with a secure QR scanner and authorization system for the organizer portal.",
			},
			{
				label: "Analytics",
				detail: "Integrated GA4 Explorer values into the administrative dashboard to provide real-time insights into ticket sales and user behavior.",
			},
		],
	},
	{
		title: "UniPay MM",
		subtitle: "Fintech Platform",
		period: "Young Investment Group",
		summary:
			"Fintech platform focused on secure payment services, backend integrations, and workflow automation using Sails.js and Node-RED.",
		url: "https://unipaymm.com/",
		tags: [
			"Sails.js",
			"Node.js",
			"Node-RED",
			"Payment APIs",
			"Fintech",
			"JWT",
			"Redis",
		],
		highlights: [
			{
				label: "Backend Services",
				detail: "Developed and maintained backend services using Sails.js to support secure fintech operations and business workflows.",
			},
			{
				label: "Workflow Automation",
				detail: "Designed and integrated automated business workflows with Node-RED to streamline system integrations and operational processes.",
			},
			{
				label: "Project Delivery",
				detail: "Collaborated with cross-functional teams to deliver backend features, integrate third-party services, and support production deployments.",
			},
		],
	},
	{
		title: "Kenkou-Kanri",
		subtitle: "Construction Site Management SaaS",
		period: "O-Technque",
		summary:
			"Enterprise SaaS platform featuring multi-tenant architecture, centralized authorization, and end-to-end project delivery.",
		url: "https://kensetsu-kenkan.com/",
		tags: [
			"NestJS",
			"Next.js",
			"Multi-Tenant",
			"Authorization",
			"Chat Service",
			"Redis",
			"Queue",
			"Pusher",
			"TypeORM",
			"PHP",
			"Laravel",
			"Cross-Domain Login",
			"JWT",
			"Refresh Token",
		],
		highlights: [
			{
				label: "Multi-Tenant Architecture",
				detail: "Designed a multi-database architecture with isolated tenant databases to ensure secure data separation, scalability, and performance across enterprise clients.",
			},
			{
				label: "Technical Leadership",
				detail: "Established coding standards, conducted code reviews, and guided a team of four engineers while maintaining clean architecture across NestJS and Next.js applications.",
			},
			{
				label: "Project Delivery",
				detail: "Led the project lifecycle from requirements gathering and system architecture to production deployment, including a real-time chat service for collaboration between construction site managers and field workers.",
			},
		],
	},
];

const contactActions = [
	{
		label: "Email",
		value: "toetet248@gmail.com",
		href: "mailto:toetet248@gmail.com",
		accent: "border-cyan-300/50 bg-cyan-300/5 text-cyan-200",
	},
	{
		label: "Phone",
		value: "959 458021097",
		href: "tel:959458021097",
		accent: "border-fuchsia-400/50 bg-fuchsia-400/5 text-fuchsia-200",
	},
	{
		label: "Resume",
		value: "View Resume",
		href: "https://drive.google.com/file/d/1SjN6SdKFk9Dptio63AVaDabaM7hdk1Hr/view?usp=sharing",
		accent: "border-lime-300/50 bg-lime-300/5 text-lime-200",
	},
];

const sortedWorkExperiences = [...workExperiences].sort(
	(a, b) =>
		getExperienceSortValue(b.period) - getExperienceSortValue(a.period),
);

function WorkTimelineCard({
	role,
	align = "left",
	onOpen,
	delay = 0,
}: Readonly<{
	role: ExperienceEntry;
	align?: "left" | "right";
	onOpen: () => void;
	delay?: number;
}>) {
	const isRight = align === "right";

	return (
		<FadeInUp
			delay={delay}
			className={`w-full max-w-[420px] ${
				isRight ? "lg:justify-self-start" : "lg:justify-self-end"
			}`}
		>
			<div className="rounded-[22px] border border-cyan-300/45 bg-slate-950/82 p-4 shadow-[8px_8px_0_rgba(244,114,182,0.18)] backdrop-blur-sm sm:p-5">
				<div
					className={`space-y-4 ${isRight ? "lg:text-left" : "lg:text-right"}`}
				>
					<div
						className={`flex flex-wrap gap-2 ${isRight ? "lg:justify-start" : "lg:justify-end"}`}
					>
						<span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
							{role.period}
						</span>
						{role.roleLabel ? (
							<span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-fuchsia-100">
								{role.roleLabel}
							</span>
						) : null}
					</div>

					<div className="space-y-1.5">
						<h3 className="text-xl font-black uppercase text-white sm:text-2xl">
							{role.title}
						</h3>
						<p className="font-mono text-sm uppercase tracking-[0.22em] text-zinc-300">
							{role.subtitle}
						</p>
					</div>

					<div
						className={`flex ${isRight ? "lg:justify-start" : "lg:justify-end"}`}
					>
						<button
							type="button"
							onClick={onOpen}
							className="inline-flex items-center justify-center rounded-full border-2 border-cyan-300 bg-cyan-300 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
						>
							More Detail
						</button>
					</div>
				</div>
			</div>
		</FadeInUp>
	);
}

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [installText, setInstallText] = useState("");
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [typedText, setTypedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [selectedDetailEntry, setSelectedDetailEntry] =
		useState<ExperienceEntry | null>(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Loading screen animation
	useEffect(() => {
		const installSteps = [
			"Installing dependencies...",
			"Initializing components...",
			"Setting up animations...",
			"Loading assets...",
			"Starting server...",
			"Ready!",
		];

		let currentStep = 0;
		let currentProgress = 0;
		const displayedSteps: string[] = [];

		const progressInterval = setInterval(() => {
			currentProgress += 1;
			setProgress(currentProgress);

			if (currentProgress >= 100) {
				clearInterval(progressInterval);
				setTimeout(() => setIsLoading(false), 300);
			}
		}, 20);

		// Add each step one by one
		const addNextStep = () => {
			if (currentStep < installSteps.length) {
				displayedSteps.push(installSteps[currentStep]);
				setInstallText(displayedSteps.join("\n"));
				currentStep++;
				setTimeout(addNextStep, 400);
			}
		};

		addNextStep();

		return () => {
			clearInterval(progressInterval);
		};
	}, []);

	useEffect(() => {
		const currentPhrase = typingPhrases[phraseIndex];
		const hasFinishedTyping = typedText === currentPhrase;
		const hasFinishedDeleting = typedText.length === 0;

		let timeout = 90;

		if (!isDeleting && hasFinishedTyping) {
			timeout = 1000;
		} else if (isDeleting) {
			timeout = 45;
		}

		const timer = window.setTimeout(() => {
			if (!isDeleting && hasFinishedTyping) {
				setIsDeleting(true);
				return;
			}

			if (isDeleting && hasFinishedDeleting) {
				setIsDeleting(false);
				setPhraseIndex(
					(currentIndex) => (currentIndex + 1) % typingPhrases.length,
				);
				return;
			}

			setTypedText((currentText) =>
				isDeleting
					? currentText.slice(0, -1)
					: currentPhrase.slice(0, currentText.length + 1),
			);
		}, timeout);

		return () => window.clearTimeout(timer);
	}, [isDeleting, phraseIndex, typedText]);

	// Handle body overflow and escape key
	useEffect(() => {
		if (!selectedDetailEntry) {
			document.body.style.overflow = "";
			return;
		}

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setSelectedDetailEntry(null);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleEscape);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleEscape);
		};
	}, [selectedDetailEntry]);

	// Handle modal animation visibility separately
	useEffect(() => {
		if (selectedDetailEntry) {
			// Trigger modal animation after a small delay
			const timer = setTimeout(() => {
				setModalVisible(true);
			}, 10);
			return () => clearTimeout(timer);
		} else {
			// Use setTimeout to avoid synchronous setState warning
			setTimeout(() => setModalVisible(false), 0);
		}
	}, [selectedDetailEntry]);

	// Handle scroll progress bar
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.scrollY || document.documentElement.scrollTop;
			const scrollHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const progress =
				scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Loading Screen */}
			<div
				className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#04070f] p-6 transition-all duration-1000 ${
					isLoading
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="w-full max-w-2xl">
					<div className=" flex items-center gap-2 rounded-t-[22px] border-2 border-cyan-300 bg-slate-950/85 p-4">
						<div className="flex items-center gap-2">
							<span className="h-2.5 w-2.5 rounded-full bg-red-400" />
							<span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
							<span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
						</div>
						<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-200">
							ttam-portfolio.exe
						</p>
					</div>

					<div className="rounded-b-[22px] border-2 border-cyan-300 bg-slate-950/85 p-6 flex flex-col">
						<div className="space-y-2 mb-4">
							<p className="font-mono text-sm text-cyan-300">
								Welcome to Toe Tet Aung Myint&apos;s Portfolio
							</p>
						</div>

						{/* Install Text */}
						<div className="flex-1 min-h-[200px] space-y-1 mb-4">
							{installText.split("\n").map((line, index) => (
								<div
									key={index}
									className="flex items-center gap-2"
								>
									{index === 0 && (
										<span className="font-mono text-cyan-300">
											$
										</span>
									)}
									{index > 0 && (
										<span className="font-mono text-cyan-300 opacity-0">
											$
										</span>
									)}
									<p className="font-mono text-sm text-lime-300">
										{line}
									</p>
									{index ===
										installText.split("\n").length - 1 && (
										<span className="ml-1 inline-block h-[1em] w-2.5 bg-lime-300 animate-pulse shrink-0" />
									)}
								</div>
							))}
						</div>

						{/* Progress Bar */}
						<div className="mt-auto pt-4 border-t border-cyan-300/20">
							<div className="flex items-center justify-between mb-2">
								<p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
									Installation Progress
								</p>
								<p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
									{progress}%
								</p>
							</div>
							<div className="h-2 w-full rounded-full border border-cyan-300 bg-black/30 overflow-hidden">
								<div
									className="h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-lime-300 transition-all duration-50"
									style={{ width: `${progress}%` }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<main
				className={`relative flex min-h-screen flex-col overflow-hidden text-zinc-50 transition-opacity duration-1000 ${
					!isLoading ? "opacity-100" : "opacity-0"
				}`}
			>
				{/* Scroll Progress Bar */}
				<div className="fixed top-0 left-0 z-50 h-1 w-full bg-black/50">
					<div
						className="h-full bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-500 transition-all duration-150 ease-out"
						style={{ width: `${scrollProgress}%` }}
					/>
				</div>
				{/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(244,114,182,0.12)_1px,transparent_1px)] bg-size-[44px_44px]" /> */}
				<div className="pointer-events-none absolute inset-0 retro-scanlines opacity-30" />

				{floatingBadges.map((badge) => (
					<span
						key={badge.text}
						className="retro-float pointer-events-none absolute items-center gap-2 rounded-full border-2 border-cyan-300/40 bg-black/35 px-4 py-1.5 font-mono text-xs tracking-[0.35em] text-cyan-200 shadow-[4px_4px_0_rgba(236,72,153,0.45)] md:inline-flex"
						style={{
							top: badge.top,
							right: badge.right,
							bottom: badge.bottom,
							left: badge.left,
							animationDelay: badge.delay,
						}}
					>
						<badge.icon className="h-3.5 w-3.5" />
						{/* {badge.text} */}
					</span>
				))}

				<section
					id="home"
					className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-16"
				>
					<div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px]">
						<FadeInLeft delay={400} isLoadingDone={!isLoading}>
							<div className="space-y-6">
								<div className="inline-flex items-center gap-2 rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-200 shadow-[4px_4px_0_rgba(34,211,238,0.38)]">
									<span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
									<span>Available For Impactful Builds</span>
								</div>

								<div className="space-y-4">
									<p className="font-mono text-xs uppercase tracking-[0.38em] text-cyan-300 sm:text-sm">
										Toe Tet Aung Myint / Senior Software
										Engineer
									</p>

									<h1 className="flex max-w-3xl flex-wrap gap-1 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
										<span className="text-cyan-300">
											Building
										</span>
										<span className="text-white">
											reliable digital systems
										</span>
										{/* <span className="text-lime-300">
									with retro energy.
								</span> */}
									</h1>

									<div className="max-w-2xl rounded-[22px] border-2 border-cyan-300 bg-slate-950/85 p-4 shadow-[6px_6px_0_rgba(244,114,182,0.6)]">
										<p className="font-mono text-[11px] uppercase tracking-[0.32em] text-cyan-300">
											Current Focus
										</p>
										<div
											className="mt-2 flex h-12 items-start font-mono text-xl font-semibold leading-snug text-lime-300 sm:h-16 sm:text-2xl"
											aria-live="polite"
										>
											<div className="min-w-0">
												{typedText}
											</div>
											<span
												className="retro-cursor ml-1 inline-block h-[1em] w-2.5 translate-y-1 bg-fuchsia-400 shrink-0"
												aria-hidden="true"
											/>
										</div>
									</div>

									{/* <p className="max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg">
								I design and ship scalable backend platforms,
								performance-focused web experiences, and
								cloud-ready products that help teams move faster
								without sacrificing maintainability.
							</p> */}
								</div>

								<div className="flex flex-col gap-3 sm:flex-row">
									<a
										href="#projects"
										onClick={(e) => {
											e.preventDefault();
											const element =
												document.querySelector(
													"#projects",
												);
											if (element) {
												element.scrollIntoView({
													behavior: "smooth",
												});
											}
										}}
										className="inline-flex items-center justify-center rounded-full border-2 border-cyan-300 bg-cyan-300 px-6 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition-transform duration-200 hover:-translate-y-1"
									>
										View Projects
									</a>
									<a
										href="#contact"
										onClick={(e) => {
											e.preventDefault();
											const element =
												document.querySelector(
													"#contact",
												);
											if (element) {
												element.scrollIntoView({
													behavior: "smooth",
												});
											}
										}}
										className="inline-flex items-center justify-center rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/10 px-6 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-fuchsia-100 transition-transform duration-200 hover:-translate-y-1"
									>
										Let&apos;s Talk
									</a>
								</div>
							</div>
						</FadeInLeft>

						{/* <div className="rounded-[22px] border-2 border-lime-300 bg-slate-950/85 p-3 shadow-[6px_6px_0_rgba(34,211,238,0.45)]"> */}
						<FadeInRight delay={400} isLoadingDone={!isLoading}>
							<div className="rounded-[16px] mt-10 border-2 border-fuchsia-400 bg-[#19062a] p-4 shadow-[6px_6px_0_rgba(34,211,238,0.45)]">
								<div className="mb-4 flex items-center justify-between border-b-2 border-dashed border-fuchsia-300/60 pb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-200">
									<span>TTAM.EXE</span>
									<span>ONLINE</span>
								</div>

								<div className="space-y-3 font-mono">
									<p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
										Status Board
									</p>
									<div className="space-y-2.5">
										{stats.map((stat) => (
											<div
												key={stat.label}
												className="flex items-center justify-between rounded-2xl border border-cyan-300/50 bg-black/30 px-3 py-3"
											>
												<span className="text-xs uppercase tracking-[0.24em] text-zinc-300">
													{stat.label}
												</span>
												<span className="block text-right text-sm font-bold uppercase tracking-[0.16em] text-lime-300">
													{stat.value}
												</span>
											</div>
										))}
									</div>

									<div className="rounded-2xl border border-fuchsia-400/60 bg-fuchsia-400/10 p-3">
										<p className="text-[11px] uppercase tracking-[0.3em] text-fuchsia-200">
											Mission
										</p>
										<p className="mt-2 text-sm leading-6 text-zinc-100">
											Transforming complex business
											requirements into scalable
											architecture, resilient systems, and
											production-ready software.
										</p>
									</div>
								</div>
							</div>
						</FadeInRight>
						{/* </div> */}
					</div>
				</section>

				<section
					id="about"
					className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
				>
					<div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div className="space-y-3">
							<p className="font-mono text-sm uppercase tracking-[0.45em] text-fuchsia-200">
								About Me
							</p>
							<FadeInUp>
								<h2 className="max-w-3xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
									From business needs to resilient production
									systems.
								</h2>
							</FadeInUp>
						</div>
						{/* <p className="max-w-xl text-base leading-8 text-zinc-300">
						A short terminal-style snapshot of how I approach
						software, teams, and long-term maintainability.
					</p> */}
					</div>

					<FadeInUp>
						<div className="rounded-[18px] bg-slate-950/75 border-2 border-cyan-300/45 shadow-[8px_8px_0_rgba(244,114,182,0.18)]">
							<div className="rounded-t-[16px] flex items-center justify-between border-2 border-cyan-300/45 px-4 py-2.5">
								<div className="flex items-center gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400" />
									<span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
									<span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
								</div>
								<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-200">
									about.exe
								</p>
							</div>

							<div className="grid gap-6 p-4 sm:p-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(200px,0.85fr)]">
								{/* Terminal Text */}
								<div className="font-mono text-xs leading-7 text-zinc-100 sm:text-xs">
									<div className="space-y-2.5">
										{terminalLines.map((line, index) => (
											<p key={`${line}-${index}`}>
												{line.startsWith(">") ? (
													<>
														<span className="text-cyan-300">
															C:\TTAM&gt;
														</span>{" "}
														<span>
															{line.slice(2)}
														</span>
													</>
												) : (
													line
												)}
											</p>
										))}
									</div>
								</div>

								{/* ASCII Art */}
								<div className="flex items-center justify-center">
									<div className="rounded-[18px] overflow-hidden ">
										<AsciiArt
											src="/profile-image.jpeg"
											width={50}
											fontSize={10}
										/>
									</div>
								</div>
							</div>
						</div>
					</FadeInUp>
				</section>

				<section
					id="skills"
					className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
				>
					<div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div className="space-y-3">
							<p className="font-mono text-sm uppercase tracking-[0.45em] text-cyan-300">
								Skills
							</p>
							<FadeInUp>
								<h2 className="max-w-3xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
									A production-ready stack across platform
									layers.
								</h2>
							</FadeInUp>
						</div>
						{/* <div className="max-w-xl rounded-[18px] border-2 border-fuchsia-400 bg-fuchsia-400/10 px-4 py-3 shadow-[6px_6px_0_rgba(34,211,238,0.26)]">
						<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-100">
							Loadout
						</p>
						<p className="mt-2 text-sm leading-6 text-zinc-100">
							Focused on scalable backends, modern frontend
							applications, cloud delivery, and architecture
							patterns that support maintainable growth.
						</p>
					</div> */}
					</div>

					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{skillGroups.map((group, index) => (
							<FadeInUp key={group.label} delay={index * 100}>
								<div
									className={`rounded-[18px] bg-slate-950/80 p-4 ${group.accent}`}
								>
									<div className="flex items-start justify-between gap-3">
										<div>
											<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-200">
												{group.label}
											</p>
											<p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-400">
												{group.items.length} Core Skills
											</p>
										</div>
										<span className="rounded-full border-2 border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-200">
											Stack
										</span>
									</div>

									<div className="mt-4 flex flex-wrap gap-2">
										{group.items.map((item) => (
											<span
												key={item}
												className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-100"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</FadeInUp>
						))}
					</div>
				</section>

				<section
					id="experience"
					className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
				>
					<div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div className="space-y-3">
							<p className="font-mono text-sm uppercase tracking-[0.45em] text-lime-300">
								Work Experience
							</p>
							<FadeInUp>
								<h2 className="max-w-4xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
									A journey through roles and
									responsibilities.
								</h2>
							</FadeInUp>
						</div>
						<p className="max-w-xl font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
							Scan the path first, then open the modal for deeper
							delivery details.
						</p>
					</div>

					<div className="relative">
						<div className="pointer-events-none absolute bottom-0 left-3 top-2 w-px bg-linear-to-b from-cyan-300/60 via-fuchsia-300/45 to-transparent lg:hidden" />
						<div className="pointer-events-none absolute bottom-0 left-1/2 top-2 hidden w-px -translate-x-1/2 bg-linear-to-b from-cyan-300/60 via-fuchsia-300/45 to-transparent lg:block" />
						<div className="space-y-5">
							{sortedWorkExperiences.map((role, index) => {
								const isLeft = index % 2 === 0;
								const delay = index * 100;

								return (
									<div
										key={`${role.title}-${role.period}`}
										className="relative"
									>
										<div className="absolute left-0 top-7 h-5 w-5 rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_0_4px_rgba(6,10,20,0.95)] lg:hidden" />

										<div className="pl-10 lg:hidden">
											<WorkTimelineCard
												role={role}
												onOpen={() =>
													setSelectedDetailEntry(role)
												}
												delay={delay}
											/>
										</div>

										<div className="hidden lg:grid lg:grid-cols-[1fr_72px_1fr] lg:items-center">
											<div className="flex justify-end pr-6">
												{isLeft ? (
													<WorkTimelineCard
														role={role}
														align="left"
														onOpen={() =>
															setSelectedDetailEntry(
																role,
															)
														}
														delay={delay}
													/>
												) : (
													<div aria-hidden="true" />
												)}
											</div>

											<div className="flex justify-center">
												<div className="h-5 w-5 rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_0_4px_rgba(6,10,20,0.95)]" />
											</div>

											<div className="flex justify-start pl-6">
												{!isLeft ? (
													<WorkTimelineCard
														role={role}
														align="right"
														onOpen={() =>
															setSelectedDetailEntry(
																role,
															)
														}
														delay={delay}
													/>
												) : (
													<div aria-hidden="true" />
												)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section
					id="projects"
					className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
				>
					<div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div className="space-y-3">
							<p className="font-mono text-sm uppercase tracking-[0.45em] text-fuchsia-200">
								Projects
							</p>
							<FadeInUp>
								<h2 className="max-w-4xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
									Selected projects with measurable impact.
								</h2>
							</FadeInUp>
						</div>
						<p className="max-w-xl font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
							Each project card highlights what was built, the
							stack behind it, and where to explore further.
						</p>
					</div>

					<div className="grid gap-4 xl:grid-cols-3">
						{projectExperiences.map((project, index) => (
							<FadeInUp key={project.title} delay={index * 100}>
								<div className="rounded-[18px] border-2 border-lime-300/45 bg-slate-950/80 p-4 shadow-[6px_6px_0_rgba(34,211,238,0.3)]">
									<div className="flex items-start justify-between gap-3">
										<div>
											<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300">
												{project.subtitle}
											</p>
											<h3 className="mt-2 text-lg font-black uppercase text-white">
												{project.title}
											</h3>
										</div>
										{/* <span className="rounded-full border-2 border-white/15 bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-fuchsia-200">
										Impact
									</span> */}
									</div>

									<p className="mt-4 text-sm leading-6 text-zinc-100">
										{project.summary}
									</p>

									<div className="mt-4 flex flex-wrap gap-2">
										{project.tags.slice(0, 5).map((tag) => (
											<span
												key={tag}
												className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-100"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="mt-5 flex flex-wrap gap-3">
										<button
											type="button"
											onClick={() =>
												setSelectedDetailEntry(project)
											}
											className="inline-flex items-center justify-center rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-fuchsia-100 transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
										>
											View Details
										</button>
										{project.url ? (
											<a
												href={project.url}
												target="_blank"
												rel="noreferrer"
												className="inline-flex items-center justify-center rounded-full border-2 border-cyan-300/50 bg-black/30 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200 transition-transform duration-200 hover:-translate-y-1"
											>
												Visit Link
											</a>
										) : null}
									</div>
								</div>
							</FadeInUp>
						))}
					</div>
				</section>

				<section
					id="contact"
					className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
				>
					<FadeInUp>
						<div className="rounded-[28px] border-2 border-cyan-300 bg-slate-950/82 p-5 shadow-[10px_10px_0_rgba(244,114,182,0.24)] backdrop-blur-sm sm:p-7 lg:p-8">
							<div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
								<div className="space-y-5">
									<div className="space-y-3">
										<p className="font-mono text-sm uppercase tracking-[0.45em] text-cyan-300">
											Contact
										</p>
										<h2 className="max-w-3xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
											Let&apos;s Build Together
										</h2>
										<p className="max-w-2xl text-sm leading-7 text-zinc-100 sm:text-base">
											I&apos;m open to impactful backend,
											full-stack, and product-focused
											engineering work. If you&apos;re
											building something meaningful,
											let&apos;s talk about architecture,
											delivery, and the right way to ship
											it.
										</p>
									</div>

									<div className="flex flex-wrap gap-3">
										<a
											href="mailto:toetet248@gmail.com"
											className="inline-flex items-center justify-center rounded-full border-2 border-cyan-300 bg-cyan-300 px-5 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition-transform duration-200 hover:-translate-y-1"
										>
											Send Email
										</a>
										<a
											href="https://www.linkedin.com/in/toe-tet-aung-myint-b46b421b1/"
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center justify-center rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.22em] text-fuchsia-100 transition-transform duration-200 hover:-translate-y-1"
										>
											Open LinkedIn
										</a>
									</div>
								</div>

								<div className="ml-auto grid w-full max-w-sm gap-3">
									{contactActions.map((action, index) => (
										<a
											key={action.label}
											href={action.href}
											target={
												action.href.startsWith(
													"mailto:",
												) ||
												action.href.startsWith("tel:")
													? undefined
													: "_blank"
											}
											rel={
												action.href.startsWith(
													"mailto:",
												) ||
												action.href.startsWith("tel:")
													? undefined
													: "noreferrer"
											}
											className={`rounded-[22px] border-2 p-4 shadow-[4px_4px_0_rgba(34,211,238,0.1)] transition-transform duration-200 hover:-translate-y-0.5 ${action.accent}`}
										>
											<div className="flex items-center justify-between gap-3">
												<p className="font-mono text-[11px] uppercase tracking-[0.32em]">
													{action.label}
												</p>
												<p className="wrap-break-word text-base font-semibold text-white">
													{action.value}
												</p>
											</div>
										</a>
									))}
								</div>
							</div>
						</div>
					</FadeInUp>
				</section>

				{selectedDetailEntry ? (
					<div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-8 sm:px-6">
						<div
							className="absolute inset-0"
							onClick={() => setSelectedDetailEntry(null)}
							aria-hidden="true"
						/>
						<dialog
							open
							aria-labelledby="detail-modal-title"
							className={`relative z-10 w-full max-w-4xl rounded-[24px] border-2 border-cyan-300 bg-[#050816] shadow-[10px_10px_0_rgba(244,114,182,0.42)] modal-fade-in-up ${modalVisible ? "modal-visible" : ""}`}
						>
							<div className="flex items-center justify-between rounded-t-[24px] border-b-2 border-fuchsia-400 bg-[#170628] px-5 py-3">
								<div>
									<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fuchsia-200">
										Detail Viewer
									</p>
									<h3
										id="detail-modal-title"
										className="mt-2 text-lg font-black uppercase text-white sm:text-xl"
									>
										{selectedDetailEntry.title}
									</h3>
								</div>
								<button
									type="button"
									onClick={() => setSelectedDetailEntry(null)}
									className="rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-fuchsia-100 cursor-pointer"
								>
									Close
								</button>
							</div>

							<div className="space-y-6 p-5 sm:p-6">
								<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
									<div>
										<p className="font-mono text-sm uppercase tracking-[0.22em] text-cyan-300">
											{selectedDetailEntry.subtitle}
										</p>
										<p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
											{selectedDetailEntry.period}
										</p>
									</div>
									{selectedDetailEntry.url ? (
										<a
											href={selectedDetailEntry.url}
											target="_blank"
											rel="noreferrer"
											className="inline-flex w-48 items-center justify-center gap-2 rounded-full border-2 border-cyan-300 bg-cyan-300 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-slate-950"
										>
											<ExternalLink className="h-3.5 w-3.5" />
											Open Live Site
										</a>
									) : null}
								</div>

								{/* <p className="text-sm leading-7 text-zinc-100">
								{selectedDetailEntry.summary}
							</p> */}

								<div className="flex flex-wrap gap-2">
									{selectedDetailEntry.tags.map(
										(tag, index) => (
											<span
												key={index}
												className="rounded-full border border-lime-300/45 bg-lime-300/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-100"
											>
												{tag}
											</span>
										),
									)}
								</div>

								<div className="grid gap-4">
									{selectedDetailEntry.highlights.map(
										(item) => (
											<div key={item.label}>
												<p className="font-mono text-[11px] uppercase bold tracking-[0.3em] text-fuchsia-200">
													{item.label}
												</p>
												<p className="mt-3 text-sm leading-7 text-zinc-100">
													{item.detail}
												</p>
											</div>
										),
									)}
								</div>
							</div>
						</dialog>
					</div>
				) : null}
			</main>
		</>
	);
}
