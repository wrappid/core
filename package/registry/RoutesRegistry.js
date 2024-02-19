export const RoutesRegistry = {
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
  }
};