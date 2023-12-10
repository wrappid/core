import { coreComponentsRegistry } from "../components/CoreComponentsRegistry";
import { layoutComponents } from "../layout";
import { componentMap } from "../utils/componentMap";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...coreComponentsRegistry,
  ...layoutComponents
};

export default ComponentRegistry;
