import BlankLayout from "../layout/BlankLayout";
import ComplexLayout from "../layout/ComplexLayout";
import FooterLayout from "../layout/FooterLayout";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import HeaderLayout from "../layout/HeaderLayout";
import WrappidDefaultLayout from "../layout/WrappidDefault.layout";
import WrappidGuestLayout from "../layout/WrappidGuest.layout";

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
  WrappidDefaultLayout: {
    comp  : WrappidDefaultLayout,
    layout: true
  },
  WrappidGuestLayout: {
    comp  : WrappidGuestLayout,
    layout: true
  }
};

export default LayoutComponentsRegistry;