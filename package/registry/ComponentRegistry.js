import LayoutComponentsRegistry from "./LayoutComponentsRegistry";
import { coreComponentsRegistry } from "../components/CoreComponentsRegistry";
import BlankLayoutPage from "../layout/page/BlankLayoutPage";
import { componentMap } from "../utils/componentMap";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...coreComponentsRegistry,
  ...LayoutComponentsRegistry,
  BlankLayoutPage: { comp: BlankLayoutPage }
};

export default ComponentRegistry;
