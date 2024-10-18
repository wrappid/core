// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDatepicker } from "@wrappid/native";

import CoreFormErrorText from "./CoreFormErrorText";
import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
// eslint-disable-next-line etc/no-commented-out-code
// import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreBox from "../layouts/CoreBox";

export default function CoreDatePicker(props) {
  // eslint-disable-next-line etc/no-commented-out-code
  // props = sanitizeComponentProps(CoreDatePicker, props);

  const { error, helperText } = props;

  return (
    <CoreBox>
      <NativeDatepicker {...props} />

      {error && <CoreFormErrorText>{error}</CoreFormErrorText>}

      {helperText && (
        <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {helperText}
        </CoreFormHelperText>
      )}
    </CoreBox>
  );
}
CoreDatePicker.validProps = [
  {
    name : "formik",
    types: [{ type: "object" }]
  },
  {
    name : "helperText",
    types: [{ type: "string" }]
  },
  {
    description: "The currently selected date.",
    name       : "value",
    types      : [{ type: "string" }],
  },
  {
    description: "The format of the date in the UI. The value for the bindings will always be in the YYYY-MM-DD format. Leave empty to let the end-user locale define the format.",
    name       : "format",
    types      : [{ type: "string" }],
  },
  {
    description: "A default value for the date picker.",
    name       : "defaultValue",
    types      : [{ type: "string" }],
  },
  {
    description: "A label that describes the content of the date picker. e.g. \"Arrival date\".",
    name       : "label",
    types      : [{ type: "node" }],
  },
  {
    description: "Name of this input. Used as a reference in form data.",
    name       : "name",
    types      : [{ type: "string" }],
  },
  {
    description: "One of the available MUI TextField variants. Possible values are outlined, filled or standard",
    name       : "variant",
    types      : [{ default: "outlined", type: "string" }],
  },
  {
    description: "The size of the component. One of small, or medium.",
    name       : "size",
    types      : [{ default: "small", type: "string" }],
  },
  {
    description: "Whether the button should occupy all available horizontal space.",
    name       : "fullWidth",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The date picker is disabled.",
    name       : "disabled",
    types      : [{ type: "boolean" }],
  },
  {
    description: "Whether the input is required to have a value.",
    name       : "isRequired",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "Whether the input value is invalid.",
    name       : "isInvalid",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    name : "autoFocus",
    types: [{ type: "boolean" }],
  },
  {
    name : "view",
    types: [{ type: "number" }],
  },
  {
    name : "closeOnSelect",
    types: [{ type: "boolean" }],
  },
  {
    name : "dayOfWeekFormatter",
    types: [{ type: "function" }],
  },
  {
    name : "disableFuture",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    name : "disableHighlightToday",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    name : "disableOpenPicker",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    name : "disablePast",
    types: [
      {
        default: false,
        type   : "boolean",
      },
    ],
  },
  {
    name : "displayWeekNumber",
    types: [{ type: "boolean" }],
  },
  {
    name : "fixedWeekNumber",
    types: [{ type: "number" }],
  },
  {
    name : "formatDensity",
    types: [{ default: "dense", type: "string", validValues: ["dense", "spacious"] }],
  },
  {
    name : "inputRef",
    types: [{ type: "ref" }],
  },
  {
    name : "loading",
    types: [{ default: false, type: "boolean" }],
  },
  {
    name : "localeText",
    types: [{ type: "object" }],
  },
  {
    name : "maxDate",
    types: [{ type: "object" }],
  },
  {
    name : "minDate",
    types: [{ type: "object" }],
  },
  {
    name : "monthsPerRow",
    types: [{ default: 3, type: "number" }],
  },
  {
    name : "onAccept",
    types: [{ type: "function" }],
  },
  {
    name : "onChange",
    types: [{ type: "function" }],
  },
  {
    name : "onClose",
    types: [{ type: "function" }],
  },
  {
    name : "onMonthChange",
    types: [{ type: "function" }],
  },
  {
    name : "onError",
    types: [{ type: "function" }],
  },
  {
    name : "onOpen",
    types: [{ type: "function" }],
  },
  {
    description: "Callback fired when the selected sections change.Signature:function(newValue: FieldSelectedSections) => voidnewValue The new selected sections.",
    name       : "onSelectedSectionsChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback fired on view change.Signature:function(view: TView) => voidview The new view.",
    name       : "onViewChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Callback fired on year change.Signature:function(year: TDate) => voidyear The new year.",
    name       : "onYearChange",
    types      : [{ type: "function" }],
  },
  {
    description: "Control the popup or dialog open state.",
    name       : "open",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The default visible view. Used when the component view is not controlled. Must be a valid option from views list.",
    name       : "openTo",
    types      : [{ defaultValue: ["day", "month", "year"], type: "string" }],
  },
  {
    description: "Force rendering in particular orientation.",
    name       : "orientation",
    types      : [{ type: "string", validValues: ["landscape", "portrait"] }],
  },
  {
    description: "If true, disable heavy animations.",
    name       : "reduceAnimations",
    types      : [{ type: "boolean" }],
  },
  {
    description: "The date used to generate the new value when both value and defaultValue are empty.",
    name       : "referenceDate",
    types      : [{ type: "object" }],
  },
  {
    description: "Component displaying when passed loading true.Signature:function() => React.ReactNodeReturns: The node to render when loading.",
    name       : "renderLoading",
    types      : [{ type: "function" }],
  },
  {
    description: "The currently selected sections. This prop accepts four formats: 1. If a number is provided, the section at this index will be selected. 2. If a string of type FieldSectionType is provided, the first section with that name will be selected. 3. If \"all\"  is provided, all the sections will be selected. 4. If null is provided, no section will be selected. If not provided, the selected sections will be handled internally.",
    name       : "selectedSections",
    types      : [
      {
        type       : "string",
        validValues: [
          "all",
          "day",
          "empty",
          "hours",
          "meridiem",
          "minutes",
          "month",
          "seconds",
          "weekDay",
          "year"
        ]
      },
      { type: "number" }
    ],
  },
  {
    description: "Disable specific date.Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.Signature:function(day: TDate) => booleanday The date to test.Returns: If true the date will be disabled.",
    name       : "shouldDisableDate",
    types      : [{ type: "function" }],
  },
  {
    description: "Disable specific year.Signature:function(year: TDate) => booleanyear The year to test.Returns: If true, the year will be disabled.",
    name       : "shouldDisableYear",
    types      : [{ type: "function" }],
  },
  {
    description: "If true, days outside the current month are rendered:- if fixedWeekNumber is defined, renders days to have the weeks requested.- if fixedWeekNumber is not defined, renders day to fill the first and last week of the current month.- ignored if calendars equals more than 1 on range pickers.",
    name       : "showDaysOutsideCurrentMonth",
    types      : [{ default: false, type: "boolean" }],
  },
  {
    description: "The props used for each component slot.",
    name       : "slotProps",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description: "Overridable component slots.See Slots API below for more details.",
    name       : "slots",
    types      : [{ default: {}, type: "object" }],
  },
  {
    description: "The selected value. Used when the component is controlled.",
    name       : "value",
    types      : [{ type: "object" }],
  },
  {
    description: "The visible view. Used when the component view is controlled. Must be a valid option from views list.",
    name       : "view",
    types      : [{ type: "string", validValues: ["day", "month", "year"] }],
  },
];
CoreDatePicker.invalidProps = [];
