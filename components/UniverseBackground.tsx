"use client";

import { useState, useEffect } from "react";

interface Star {
	id: number;
	x: number;
	y: number;
	size: number;
	opacity: number;
	duration: number;
	parallax: number;
}

function generateStars(count: number): Star[] {
	const stars: Star[] = [];
	for (let i = 0; i < count; i++) {
		stars.push({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 2 + 1,
			opacity: Math.random() * 0.8 + 0.2,
			duration: Math.random() * 3 + 2,
			parallax: Math.random() * 0.5 + 0.1, // Different parallax speeds for depth!
		});
	}
	return stars;
}

export default function UniverseBackground() {
	const [stars, setStars] = useState<Star[]>([]);
	const [mounted, setMounted] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setStars(generateStars(350));
			setMounted(true);
		}, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="universe-bg">
			<div
				className="cosmic-glow"
				style={{
					background: "#67e8f9",
					top: "-200px",
					left: "-100px",
					animationDelay: "0s",
					opacity: 0.1,
				}}
			/>
			{/* <div
				className="cosmic-glow"
				style={{
					background: "#f472b6",
					bottom: "-200px",
					right: "-100px",
					animationDelay: "-10s",
				}}
			/> */}
			<div
				className="cosmic-glow"
				style={{
					background: "#a855f7",
					top: "20%",
					right: "-150px",
					animationDelay: "-5s",
					opacity: 0.05,
				}}
			/>
			<div
				className="cosmic-glow"
				style={{
					background: "#a3e635",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					animationDelay: "-15s",
					opacity: 0.05,
				}}
			/>

			{mounted && (
				<div className="stars">
					{stars.map((star) => (
						<div
							key={star.id}
							className="star"
							style={
								{
									left: `${star.x}%`,
									top: `${star.y + scrollY * star.parallax * 0.05}%`,
									width: `${star.size}px`,
									height: `${star.size}px`,
									"--opacity": star.opacity,
									"--duration": `${star.duration}s`,
								} as React.CSSProperties
							}
						/>
					))}
				</div>
			)}
		</div>
	);
}
