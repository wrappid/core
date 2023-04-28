import { ENV_DEV_MODE } from "./constants";
import { ENV_STAGE_MODE } from "./constants";
import { ENV_PROD_MODE } from "./constants";

var coreConfig = {
  // environment: ENV_DEV_MODE,
  // environment: ENV_STAGE_MODE,
  // environment: ENV_PROD_MODE,

  // Dev URL
  // adminUrl: "http://localhost:8080",
  // scraperDBUrl: "http://localhost:5001",
  backendUrl: "http://192.168.0.103:8080",

  // Stage URL
  // adminUrl: "http://localhost:8080",
  // scraperDBUrl: "http://localhost:5001",
  // backendUrl: "https://stageapi.rxefy.com",

  // adminUrl: "http://rxefy-admin.ap-southeast-1.elasticbeanstalk.com",
  // scraperDBUrl: "http://medicine-data.ap-southeast-1.elasticbeanstalk.com",
  // backendUrl: "http://prescription-env.eba-4nj3rccj.ap-southeast-1.elasticbeanstalk.com",

  webUrl: "webapp.rxefy.com/",
  footerText: "Rxefy Tech Pvt. Ltd. | Copyright &copy; 2022",

  // snack message
  drawerWidth: 240,
  miniDrawerWidth: 56,
  snackMessage: false,
  otpLength: 6,
  color: {
    secondaryTextColor: "#FB607F",
    primaryTextColor: "#6D6C6C",
    primaryTextColorLight: "#eeeeee",
    defaultBackgroundColor: "#ffffff",
    lightBackgroundColor: "#fafafa",
    contrastBackgroundColor: "#FB607F",
    contrastBackgroundColorDark: "#FA385F",
    contrastBackgroundColorLight: "#FDAFBF",
    contrastBackgroundColorVeryLight: "#fee7ec",
    errorColor: "#b71c1c",
    successColor: "#557c11",
    labelColor: "#b3b3b3",
  },
};

let customConfig = null;

try {
  let p = "../../../../src/config.json";
  console.log("PATH ", p);
  customConfig = require(p);
} catch (err) {
  console.warn("User config not found");
}

let config = customConfig
  ? {
      ...coreConfig,
      ...customConfig,
    }
  : coreConfig;

export default config;
