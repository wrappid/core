export const RoutesRegistry = {
  CenteredBlankLayoutPage: {
    Page        : { appComponent: "CenteredBlankLayoutPage", layout: "CenteredBlankLayout" },
    authRequired: false,
    entityRef   : "centerdBlank",
    url         : "layout/centerdBlank"
  },
  blankLayout: {
    Page        : { appComponent: "BlankLayoutPage", layout: "BlankLayout" },
    authRequired: false,
    entityRef   : "blankLayout",
    url         : "layout/blank"
  },
  customLayout: {
    Page        : { appComponent: "CustomLayoutPage", layout: "CustomLayout" },
    authRequired: false,
    entityRef   : "customLayout",
    url         : "layout/custom"
  },
  fixedFooterLayout: {
    Page        : { appComponent: "FixedFooterLayoutPage", layout: "FixedFooterLayout" },
    authRequired: false,
    entityRef   : "fixedFooterLayout",
    url         : "layout/fixedFooter"
  },
  fixedHeaderFooterLayout: {
    Page        : { appComponent: "FixedHeaderFooterLayoutPage", layout: "FixedHeaderFooterLayout" },
    authRequired: false,
    entityRef   : "fixedHeaderFooterLayout",
    url         : "layout/fixedHeaderFooter"
  },
  fixedHeaderLayout: {
    Page        : { appComponent: "FixedHeaderLayoutPage", layout: "FixedHeaderLayout" },
    authRequired: false,
    entityRef   : "fixedheader",
    url         : "layout/fixedHeader"
  },
  footerLayout: {
    Page        : { appComponent: "FooterLayoutPage", layout: "FooterLayout" },
    authRequired: false,
    entityRef   : "footerLayout",
    url         : "layout/footer"
  },
  headerFooterLayout: {
    Page        : { appComponent: "HeaderFooterLayoutPage", layout: "HeaderFooterLayout" },
    authRequired: false,
    entityRef   : "headerFooterLayout",
    url         : "layout/header-footer"
  },
  headerLayout: {
    Page        : { appComponent: "HeaderLayoutPage", layout: "HeaderLayout" },
    authRequired: false,
    entityRef   : "headerLayout",
    url         : "layout/header"
  },
  threeColumnLayout: {
    Page        : { appComponent: "ThreeColumnLayoutPage", layout: "ThreeColumnLayout" },
    authRequired: false,
    entityRef   : "threeColumnLayout",
    url         : "layout/threeColumn"
  },
  twoColumnLayout: {
    Page        : { appComponent: "TwoColumnLayoutPage", layout: "TwoColumnLayout" },
    authRequired: false,
    entityRef   : "twoColumnLayout",
    url         : "layout/twoColumn"
  }
};