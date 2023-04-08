// import path from "path";

let ComponentRegistry = {};

let customRegistry = null;
try {
  let p = "../../../../src/config.json";
  customRegistry = require(p);
} catch (err) {
  console.warn("User config not found");
}

ComponentRegistry = customRegistry
  ? {
      ...ComponentRegistry,
      ...customRegistry,
    }
  : ComponentRegistry;

export default ComponentRegistry;
