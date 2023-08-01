export const AUTH_THEME = {
	shape      : { borderRadius: 4 },
	typography : {
		button    : { textTransform: "none" },
	},
	palette: {
		type      : "light",
		background: {
			default: "#f91754",
			// default: "#F00",
		},
        common: {
            black: "#FFFFFF",
            white: "#FFFFFF",
        },
		primary: {
			main        : "#FFFFFF",
			light       : "#FFFFFF",
			dark        : "#FFFFFF",
			contrastText: "#FB607F",
		},
		secondary: {
			main            : "#FFFFFF",
			light           : "#FAFAFA",
			dark            : "#6D6C6C",
			transparentLight: "#FAFAFAAA",
			transparentDark : "#6D6C6CAA",
		},
		error: {
			main        : "#FFFFFF",
			light       : "#FFFFFF",
			dark        : "#FFFFFF",
			contrastText: "#0000",
		},
		success: {
			main        : "#FFFFFF",
			light       : "#FFFFFF",
			dark        : "#FFFFFF",
			contrastText: " rgba(255, 255, 255, 0.87)",
		},
		warning: {
			main        : "#FFFFFF",
			light       : "#FFFFFF",
			dark        : "#FFFFFF",
			contrastText: "rgba(255,255,255, 0.87)",
		},
		info: {
			main        : "#FFFFFF",
			light       : "#FFFFFF",
			dark        : "#FFFFFF",
			contrastText: "rgba(255, 255, 255, 0.87)",
		},
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF"
        },
        action: {
            active: "rgba(255, 255, 255, 0.54)",
            hover: "rgba(255, 255, 255, 0.04)",
            disabled: "rgba(255, 255, 255, 0.26)",
            focus: "rgba(255, 255, 255, 0.12)",
        }
	},
};
