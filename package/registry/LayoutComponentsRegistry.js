import BlankLayout from "../components/layouts/_system/BlankLayout";
import CenteredBlankLayout from "../components/layouts/_system/CenteredBlankLayout";
import ComplexLayout from "../components/layouts/_system/ComplexLayout";
import FixedFooterLayout from "../components/layouts/_system/FixedFooterLayout";
import FixedHeaderFooterLayout from "../components/layouts/_system/FixedHeaderFooterLayout";
import FixedHeaderLayout from "../components/layouts/_system/FixedHeaderLayout";
import FooterLayout from "../components/layouts/_system/FooterLayout";
import HCenteredBlankLayout from "../components/layouts/_system/HCenteredBlankLayout";
import HeaderFooterLayout from "../components/layouts/_system/HeaderFooterLayout";
import HeaderLayout from "../components/layouts/_system/HeaderLayout";
import LeftDrawerLayout from "../components/layouts/_system/LeftDrawerLayout";
import LeftRightDrawerLayout from "../components/layouts/_system/LeftRightDrawerLayout";
import RightDrawerLayout from "../components/layouts/_system/RightDrawerLayout";
import ThreeColumnLayout from "../components/layouts/_system/ThreeColumnLayout";
import TwoColumnLayout from "../components/layouts/_system/TwoColumnLayout";
import VCenteredBlankLayout from "../components/layouts/_system/VCenteredBlankLayout";

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
  FixedFooterLayout: {
    comp  : FixedFooterLayout,
    layout: true
  },
  FixedHeaderFooterLayout: {
    comp  : FixedHeaderFooterLayout,
    layout: true
  },
  FixedHeaderLayout: {
    comp  : FixedHeaderLayout,
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
  LeftDrawerLayout: {
    comp  : LeftDrawerLayout,
    layout: true
  },
  LeftRightDrawerLayout: {
    comp  : LeftRightDrawerLayout,
    layout: true
  },
  RightDrawerLayout: {
    comp  : RightDrawerLayout,
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