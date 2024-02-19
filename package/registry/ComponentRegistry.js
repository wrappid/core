import { coreComponentsRegistry } from "../components/CoreComponentsRegistry";
import BlankLayoutPage from "../layout/page/BlankLayoutPage";
import ComplexLayoutPage from "../layout/page/ComplexLayoutPage";
import FooterLayoutPage from "../layout/page/FooterLayoutPage";
import HeaderFooterLayoutPage from "../layout/page/HeaderFooterLayoutPage";
import HeaderLayoutPage from "../layout/page/HeaderLayoutPage";
import { componentMap } from "../utils/componentMap";
// eslint-disable-next-line import/order
import LayoutComponentsRegistry from "./LayoutComponentsRegistry";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...coreComponentsRegistry,
  ...LayoutComponentsRegistry,
  BlankLayoutPage       : { comp: BlankLayoutPage },
  ComplexLayoutPage     : { comp: ComplexLayoutPage },
  FooterLayoutPage      : { comp: FooterLayoutPage },
  HeaderFooterLayoutPage: { comp: HeaderFooterLayoutPage },
  HeaderLayoutPage      : { comp: HeaderLayoutPage }
};

export default ComponentRegistry;
