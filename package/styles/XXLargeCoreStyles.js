
// --import { XX_LARGE_WINDOW_WIDTH } from "../config/constants";

import { BaseStyle, XXLargeUtilityStyles } from "@wrappid/styles";

// --const MIN_WIDTH = XX_LARGE_WINDOW_WIDTH;
// --const MAX_WIDTH = Number.MAX_VALUE; // setting value to very large number

export default class XXLargeCoreStyles extends BaseStyle {
  xxLargeUtilityStyles = new XXLargeUtilityStyles().style;
  
  constructor() {
    super();

    this.style = { devBorder: { boxShadow: "inset 0px 0px 1px 1px darkgray" } };
  }
}
