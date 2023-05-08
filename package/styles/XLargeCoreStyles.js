import {
	XX_LARGE_WINDOW_WIDTH,
	X_LARGE_WINDOW_WIDTH
} from "../config/constants";
import { defaultUtilityStyles,  xLargeUtilityStyles, DEFAULT_PADDING,
	IMPORTANT} from "@wrappid/styles";

const MIN_WIDTH = X_LARGE_WINDOW_WIDTH;
const MAX_WIDTH = XX_LARGE_WINDOW_WIDTH - 1;

export const xLargeCoreStyles = {
	devBorder: { ...defaultUtilityStyles.borderWarning },
	authBanner: {
		backgroundImage   : "url(./images/welcome-bg.png)",
		backgroundPosition: "center",
		backgroundSize    : "cover",
		backgroundRepeat  : "no-repeat",
		height            : "100%",
	},
	authFormContainer: { width: "60%" },
	authContainer    : { height: "100%" },
	authForm         : { height: "100%" },
};
