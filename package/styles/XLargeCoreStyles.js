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
		backgroundImage   : "url(./images/welcome-bg.png)" + IMPORTANT,
		backgroundPosition: "center" + IMPORTANT,
		backgroundSize    : "cover" + IMPORTANT,
		backgroundRepeat  : "no-repeat" + IMPORTANT,
		height            : "100%" + IMPORTANT,
	},
	authFormContainer: { width: "60%" + IMPORTANT },
	authContainer    : { height: "100%" + IMPORTANT },
	authForm         : { height: "100%" + IMPORTANT },
};
