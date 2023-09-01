import { coreComponentsRegistry } from "../components/coreComponentsRegistry";
import { componentMap } from "../utils/componentMap";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...coreComponentsRegistry
};

export default ComponentRegistry;
