import BlankLayout from "../layout/BlankLayout";
import ComplexLayout from "../layout/ComplexLayout";
import FooterLayout from "../layout/FooterLayout";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import HeaderLayout from "../layout/HeaderLayout";
import ThreeColumnLayout from "../layout/ThreeColumnLayout";
import TwoColumnLayout from "../layout/TwoColumnLayout";

const LayoutComponentsRegistry = {
  BlankLayout: {
    comp  : BlankLayout,
    layout: true
  },
  ComplexLayout: {
    comp  : ComplexLayout,
    layout: true
  },
  FooterLayout: {
    comp  : FooterLayout,
    layout: true
  },
  HeaderFooterLayout: {
    comp  : HeaderFooterLayout,
    layout: true
  },
  HeaderLayout: {
    comp  : HeaderLayout,
    layout: true
  },
  ThreeColumnLayout: {
    comp  : ThreeColumnLayout,
    layout: true
  },
  TwoColumnLayout: {
    comp  : TwoColumnLayout,
    layout: true
  }
};

export default LayoutComponentsRegistry;