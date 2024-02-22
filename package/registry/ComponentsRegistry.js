import { coreComponentsRegistry } from "../components/CoreComponentsRegistry";
import CoreLayoutItem from "../layout/core/CoreLayoutItem";
import CoreLayoutPlaceholder from "../layout/core/CoreLayoutPlaceholder";
import BlankLayoutPage from "../layout/page/BlankLayoutPage";
import ComplexLayoutPage from "../layout/page/ComplexLayoutPage";
import FooterLayoutPage from "../layout/page/FooterLayoutPage";
import HeaderFooterLayoutPage from "../layout/page/HeaderFooterLayoutPage";
import HeaderLayoutPage from "../layout/page/HeaderLayoutPage";
import { componentMap } from "../utils/componentMap";
// eslint-disable-next-line import/order
import LayoutComponentsRegistry from "./LayoutComponentsRegistry";

let ComponentsRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...coreComponentsRegistry,
  ...LayoutComponentsRegistry,
  BlankLayoutPage       : { comp: BlankLayoutPage },
  ComplexLayoutPage     : { comp: ComplexLayoutPage },
  CoreLayoutItem        : { comp: CoreLayoutItem },
  CoreLayoutPlaceholder : { comp: CoreLayoutPlaceholder },
  FooterLayoutPage      : { comp: FooterLayoutPage },
  HeaderFooterLayoutPage: { comp: HeaderFooterLayoutPage },
  HeaderLayoutPage      : { comp: HeaderLayoutPage }
};

export default ComponentsRegistry;
