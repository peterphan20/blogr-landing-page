module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				introPattern: "url('./images/bg-pattern-intro.svg')",
			}),
			colors: {
				blue: {
					footerBg: "hsl(240, 10%, 16%)",
					footerText: "hsl(240, 2%, 79%)",
					bodyCopy: "hsl(207, 13%, 34%)",
					heading: "hsl(208, 49%, 24%)",
				},
				white: {
					text: "hsl(0, 0%, 100%)",
				},
				red: {
					lightBg: "hsl(353, 100%, 62%)",
					veryLight: "hsl(13, 100%, 72%)",
					cta: "hsl(356, 100%, 66%)",
					ctaBg: "hsl(355, 100%, 74%)",
				},
			},
			fontFamily: {
				overpass: ["Overpass"],
				ubuntu: ["Ubuntu"],
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
