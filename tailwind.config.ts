import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				muted: 'hsl(var(--muted))',
				accent: 'hsl(var(--accent))',
			},
		},
		container: {
			center: true,
            padding: "1rem",
		}
	},
};
export default config;
