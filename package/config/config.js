let coreConfig = {/* @todo add default values later if required eg.wrappid.conf.json */};

let customConfig = null;

try {
  let appConfigPath = "../../../../src/config.json";

  // eslint-disable-next-line no-console
  console.log("PATH ", appConfigPath);
  // eslint-disable-next-line no-undef
  customConfig = require(appConfigPath);
} catch (err) {
  // eslint-disable-next-line no-console
  console.warn("User config not found");
}

let config = customConfig
  ? {
    ...coreConfig,
    ...customConfig,
  }
  : coreConfig;

export default config;
