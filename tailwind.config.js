module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					footerBg: "hsl(240, 10%, 16%)",
					footerText: "hsl(240, 2%, 79%)",
					bodyCopy: "hsl(207, 13%, 34%)",
				},
				white: {
					text: "hsl(0, 0%, 100%)",
				},
				red: {
					lightBg: "hsl(353, 100%, 62%)",
					veryLight: "hsl(13, 100%, 72%)",
				},
			},
			fontFamily: {
				overpass: "Overpass",
				ubuntu: "Ubuntu",
			},
			borderRadius: {
				footer: "100px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
