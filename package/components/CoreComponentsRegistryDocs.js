import React from "react";

import CoreAvatar from "./dataDisplay/CoreAvatar.js";
import {documentation as coreAvatarDocs} from "./dataDisplay/CoreAvatar.js";
import CoreClasses from "../styles/CoreClasses.js";
import CoreTypography from "./dataDisplay/CoreTypography.js";

const CoreComponentsRegistryDocs = {
  CoreAvatar: {
    comp       : CoreAvatar,
    documentation: coreAvatarDocs,
  },
};

export default CoreComponentsRegistryDocs;
