// eslint-disable-next-line import/no-unresolved
import { NativeAppContainer } from "@wrappid/native";

import CoreComponentsRegistry from "../components/CoreComponentsRegistry";
import Logout from "../components/navigation/Logout";
import SplashComponent from "../components/navigation/SplashComponent";
import PageLoader from "../components/PageLoader";
import ComponentNotFound from "../error/ComponentNotFound";
import Error404 from "../error/Error404";
import Error500 from "../error/Error500";
import LayoutMismatch from "../error/LayoutMismatch";
import CoreLayoutItem from "../layout/CoreLayoutItem";
import CoreLayoutPlaceholder from "../layout/CoreLayoutPlaceholder";
import { componentMap } from "../utils/componentMap";
// eslint-disable-next-line import/order
import LayoutComponentsRegistry from "./LayoutComponentsRegistry";

let ComponentsRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...CoreComponentsRegistry,
  ...LayoutComponentsRegistry,
  ComponentNotFound    : { comp: ComponentNotFound },
  CoreLayoutItem       : { comp: CoreLayoutItem },
  CoreLayoutPlaceholder: { comp: CoreLayoutPlaceholder },
  Error404             : { comp: Error404 },
  Error500             : { comp: Error500 },
  LayoutMismatch       : { comp: LayoutMismatch },
  Logout               : { comp: Logout },
  NativeAppContainer   : { comp: NativeAppContainer },
  PageLoader           : { comp: PageLoader },
  SplashComponent      : { comp: SplashComponent },
};

export default ComponentsRegistry;
