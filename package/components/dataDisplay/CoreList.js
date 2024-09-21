// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeList } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreList(props) {
  props = sanitizeComponentProps(CoreList, props);
  return <NativeList {...props}/>;
}

CoreList.validProps = [
  {
    description: "The content of the component.",
    name       : "children",
    types      : [{ type: "node" }],
  },
  {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    name       : "component",
    types      : [{ type: "elementType" }],
  },
  {
    description: "If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. The prop is available to descendant components as the dense context.",
    name       : "dense",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "If true, vertical padding is removed from the list.",
    name       : "disablePadding",
    types      : [
      {
        default    : false,
        type       : "boolean",
        validValues: [true, false],
      },
    ],
  },
  {
    description: "The content of the subheader, normally ListSubheader.",
    name       : "subheader",
    types      : [{ type: "node" }],
  },
  {
    description: "Enabling types of listStyle in list component without implementing StyleClasses ",
    name       : "listType",
    types      : [
      {
        default    : "DEFAULT",
        type       : "string",
        validValues: [
          "DEFAULT",
          "CJK_HEAVENLY_STEM",
          "ARABIC_INDIC",
          "DISC",
          "CIRCLE",
          "SQUARE",
          "DECIMAL",
          "DECIMAL_LEADING_ZERO",
          "ARMENIAN",
          "AUTO",
          "BENGALI",
          "CAMBODIAN",
          "CJK_EARTHLY_BRANCH",
          "CJK_IDEOGRAPHIC",
          "DEVANAGARI",
          "ETHIOPIC_HALEHAME",
          "ETHIOPIC_HALEHAME_AM",
          "ETHIOPIC_HALEHAME_TI_ER",
          "ETHIOPIC_HALEHAME_TI_ET",
          "GEORGIAN",
          "GUJARATI",
          "HANGUL",
          "HANGUL_CONSONANT",
          "HEBREW",
          "HIRAGANA",
          "HIRAGANAIROHA",
          "INSIDE",
          "KANNADA",
          "KATAKANA",
          "KATAKANA_IROHA",
          "KHMER",
          "KOREAN_HANJA_FORMAL",
          "KOREAN_HANGUL_FORMAL",
          "KOREAN_HANJA_INFORMAL",
          "LAO",
          "LOWER_ALPHA",
          "LOWER_ARMENIAN",
          "LOWER_LATIN",
          "LOWER_GREEK",
          "LOWER_ROMAN",
          "MALAYALAM",
          "MONGOLIAN",
          "MYANMAR",
          "ORIYA",
          "OUTSIDE",
          "PERSIAN",
          "SIMP_CHINESE_FORMAL",
          "SIMP_CHINESE_INFORMAL",
          "TELUGU",
          "THAI",
          "TIBETAN",
          "TRAD_CHINESE_FORMAL",
          "TRAD_CHINESE_INFORMAL",
          "UPPER_ALPHA",
          "UPPER_ARMENIAN",
          "UPPER_LATIN",
          "UPPER_ROMAN",
          "URDU",
          "INHERIT",
          "INITIAL",
          "REVERT",
          "REVERT_LAYER",
          "UNSET",
          "NONE"
        ] 
      }
    ]
  },
  {
    description: "The content of the subheader, normally ListSubheader.",
    name       : "variant",
    types      : [
      {
        default    : "DEFAULT",
        type       : "string",
        validValues: ["DEFAULT", "HTML", "GRID"] 
      }
    ],
  },
  {
    description: "The content of the subheader, normally ListSubheader.",
    name       : "gridItemComponent",
    types      : [
      {
        default    : "2",
        type       : "string",
        validValues: ["2", "3", "4", "6"] 
      }
    ],
  }
];

CoreList.invalidProps = [];
