import { CoreComponentsRegistry } from "../components/CoreComponentsRegistry";
import { componentMap } from "../utils/componentMap";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...CoreComponentsRegistry
};

export default ComponentRegistry;
