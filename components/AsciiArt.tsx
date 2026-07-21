"use client";

import { useEffect, useRef, useState } from "react";

interface AsciiArtProps {
	src: string;
	width?: number;
	height?: number;
	chars?: string;
	fontSize?: number;
}

export default function AsciiArt({
	src,
	width = 120,
	height = 40,
	chars = "@%#*+=-:. ",
	fontSize = 10,
}: AsciiArtProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [ascii, setAscii] = useState("");

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const img = new Image();
		img.crossOrigin = "anonymous";
		img.src = src;

		img.onload = () => {
			// Calculate scaled dimensions, accounting for text aspect ratio (characters are ~2x taller than wide)
			const aspectRatio = img.width / img.height;
			const adjustedHeight = Math.floor(width / aspectRatio / 2);

			canvas.width = width;
			canvas.height = adjustedHeight;
			ctx.drawImage(img, 0, 0, width, adjustedHeight);

			const imageData = ctx.getImageData(0, 0, width, adjustedHeight);
			const data = imageData.data;

			let result = "";
			for (let y = 0; y < adjustedHeight; y++) {
				for (let x = 0; x < width; x++) {
					const index = (y * width + x) * 4;
					const r = data[index];
					const g = data[index + 1];
					const b = data[index + 2];
					const brightness = (r + g + b) / 3;
					const charIndex = Math.floor(
						((255 - brightness) / 255) * (chars.length - 1),
					);
					result += chars[charIndex];
				}
				result += "\n";
			}

			setAscii(result);
		};
	}, [src, width, chars]);

	return (
		<div
			className="font-mono text-zinc-100 leading-tight"
			style={{ fontSize: `${fontSize}px` }}
		>
			<pre className="m-0">{ascii}</pre>
			<canvas ref={canvasRef} className="hidden" />
		</div>
	);
}
