/**
 * To run this file
 * from any folder
 * node <path to this script>
 */
console.log("This script will generate all core components.");

/**
 * @todo
 *
 * What this script will do
 * 1. create a CoreComponentsRegistry.js
 * package/components/CoreComponentsRegistry.js
 * 2. get all the components files from the components folder
 * 3. the structure of the file is
 *
 * import TestComponent from "./components/TestComponent";
 * export const ComponentRegistry = {
 *     TestComponents: {
 *         comp: TestComponent,
 *     }
 * }
 *
 */

const fs = require("fs");
const path = require("path");

const componentsDir = path.join(process.cwd(), "package/components");
const registryPath = path.join(componentsDir, "CoreComponentsRegistry.js");

// Creating CoreComponentsRegistry.js
fs.writeFileSync(registryPath, "");

// Recursively scan directories and files
const scanDirectory = (directory) => {
    const files = fs.readdirSync(directory, { withFileTypes: true });

    let importStatements = "";
    let registryEntries = "";

    files.forEach(file => {
        const filePath = path.join(directory, file.name);

        if (file.isDirectory()) {
            const { importStatements: nestedImports, registryEntries: nestedRegistry } = scanDirectory(filePath);
            importStatements += nestedImports;
            registryEntries += nestedRegistry;
        } else if (file.isFile()) {
            const componentName = path.basename(file.name, path.extname(file.name));
            const componentPath = path.relative(componentsDir, filePath).replace(/\\/g, "/");
            importStatements += `import ${componentName} from "./${componentPath}";\n`;
            registryEntries += `    ${componentName}: { comp: ${componentName} },\n`;
        }
    });

    return { importStatements, registryEntries };
};

// Generate the import statements and registry entries for all components
const { importStatements, registryEntries } = scanDirectory(componentsDir);

// Generate the content of CoreComponentsRegistry.js
const fileContent = `${importStatements}\n` +
    `export const ComponentRegistry = {\n` +
    `${registryEntries}` +
    `};`;

// Write the content to CoreComponentsRegistry.js
fs.writeFileSync(registryPath, fileContent);

console.log("CoreComponentsRegistry.js generated successfully.");
