import { coreComponentsRegistry } from "../components/CoreComponentsRegistry";
import { layoutComponents } from "../layout";
import BlankLayoutPage from "../layout/page/BlankLayoutPage";
import { componentMap } from "../utils/componentMap";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...coreComponentsRegistry,
  ...layoutComponents,
  BlankLayoutPage: { comp: BlankLayoutPage }
};

export default ComponentRegistry;
