import { LARGE_WINDOW_WIDTH, X_LARGE_WINDOW_WIDTH } from "../config/constants";
import { defaultUtilityStyles, DEFAULT_PADDING,
	IMPORTANT, largeUtilityStyles } from "@wrappid/styles";

const MIN_WIDTH = LARGE_WINDOW_WIDTH;
const MAX_WIDTH = X_LARGE_WINDOW_WIDTH - 1;

export const largeCoreStyles = {
	devBorder: { boxShadow: "inset 0px 0px 1px 1px green", },
	authBanner: {
		backgroundImage   : "url(./images/welcome-bg.png)",
		backgroundPosition: "center" + IMPORTANT,
		backgroundSize    : "cover" + IMPORTANT,
		backgroundRepeat  : "no-repeat" + IMPORTANT,
		height            : "100%" + IMPORTANT,
	},
	authForm         : { height: "100%" + IMPORTANT },
	authFormContainer: { width: "60%" + IMPORTANT },
	authContainer    : { height: "100%" + IMPORTANT },
	profileBarWidth  : { maxWidth: "25vw" + IMPORTANT },
};
