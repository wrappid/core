import { coreComponentsRegistry } from "../components/CoreComponentsRegistry";
import ComponentNotFound from "../error/ComponentNotFound";
import Error404 from "../error/Error404";
import Error500 from "../error/Error500";
import LayoutMismatch from "../error/LayoutMismatch";
import CoreLayoutItem from "../layout/core/CoreLayoutItem";
import CoreLayoutPlaceholder from "../layout/core/CoreLayoutPlaceholder";
import BlankLayoutPage from "../layout/page/BlankLayoutPage";
import ComplexLayoutPage from "../layout/page/ComplexLayoutPage";
import FixedFooterLayoutPage from "../layout/page/FixedFooterLayoutPage";
import FixedHeaderFooterLayoutPage from "../layout/page/FixedHeaderFooterLayoutPage";
import FixedHeaderLayoutPage from "../layout/page/FixedHeaderLayoutPage";
import FooterLayoutPage from "../layout/page/FooterLayoutPage";
import HeaderFooterLayoutPage from "../layout/page/HeaderFooterLayoutPage";
import HeaderLayoutPage from "../layout/page/HeaderLayoutPage";
import ThreeColumnLayoutPage from "../layout/page/ThreeColumnLayoutPage";
import TwoColumnLayoutPage from "../layout/page/TwoColumnLayoutPage";
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
  BlankLayoutPage            : { comp: BlankLayoutPage },
  ComplexLayoutPage          : { comp: ComplexLayoutPage },
  ComponentNotFound          : { comp: ComponentNotFound },
  CoreLayoutItem             : { comp: CoreLayoutItem },
  CoreLayoutPlaceholder      : { comp: CoreLayoutPlaceholder },
  Error404                   : { comp: Error404 },
  Error500                   : { comp: Error500 },
  FixedFooterLayoutPage      : { comp: FixedFooterLayoutPage },
  FixedHeaderFooterLayoutPage: { comp: FixedHeaderFooterLayoutPage },
  FixedHeaderLayoutPage      : { comp: FixedHeaderLayoutPage },
  FooterLayoutPage           : { comp: FooterLayoutPage },
  HeaderFooterLayoutPage     : { comp: HeaderFooterLayoutPage },
  HeaderLayoutPage           : { comp: HeaderLayoutPage },
  LayoutMismatch             : { comp: LayoutMismatch },
  ThreeColumnLayoutPage      : { comp: ThreeColumnLayoutPage },
  TwoColumnLayoutPage        : { comp: TwoColumnLayoutPage }
};

export default ComponentsRegistry;
