var coreConfig = {/* @todo add default values later if required eg.wrappid.conf.json */};

let customConfig = null;

try {
  let appConfigPath = "../../../../src/config.json";
  console.log("PATH ", appConfigPath);
  customConfig = require(appConfigPath);
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
