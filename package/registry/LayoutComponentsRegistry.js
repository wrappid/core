import BlankLayout from "../components/layouts/_system/BlankLayout";
import CenteredBlankLayout from "../components/layouts/_system/CenteredBlankLayout";
import HCenteredBlankLayout from "../components/layouts/_system/HCenteredBlankLayout";
import HeaderFooterLayout from "../components/layouts/_system/HeaderFooterLayout";
import VCenteredBlankLayout from "../components/layouts/_system/VCenteredBlankLayout";
import ComplexLayout from "../layout/ComplexLayout";
import FooterLayout from "../layout/FooterLayout";
import HeaderLayout from "../layout/HeaderLayout";
import ThreeColumnLayout from "../layout/ThreeColumnLayout";
import TwoColumnLayout from "../layout/TwoColumnLayout";

const LayoutComponentsRegistry = {
  BlankLayout: {
    comp  : BlankLayout,
    layout: true
  },
  CenteredBlankLayout: {
    comp  : CenteredBlankLayout,
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
  HCenteredBlankLayout: {
    comp  : HCenteredBlankLayout,
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
  },
  VCenteredBlankLayout: {
    comp  : VCenteredBlankLayout,
    layout: true
  }
};

export default LayoutComponentsRegistry;