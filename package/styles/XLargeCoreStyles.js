// eslint-disable-next-line import/no-unresolved
import { BaseStyle, XLargeUtilityStyles } from "@wrappid/styles";

/* -- import {
  XX_LARGE_WINDOW_WIDTH,
  X_LARGE_WINDOW_WIDTH
} from "../config/constants"; */

// -- const MIN_WIDTH = X_LARGE_WINDOW_WIDTH;
// -- const MAX_WIDTH = XX_LARGE_WINDOW_WIDTH - 1;

export default class XLargeCoreStyles extends BaseStyle {
  xLargeUtilityStyles = new XLargeUtilityStyles().style;
  
  constructor() {
    super();

    this.style = { devBorder: { boxShadow: "inset 0px 0px 1px 1px orange" } };
  }
}