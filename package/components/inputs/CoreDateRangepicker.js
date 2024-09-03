// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateRangePicker } from "@wrappid/native";

import CoreFormHelperText from "./CoreFormHelperText";
import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDateRangepicker(props) {
  return (
    <CoreBox>
      <NativeDateRangePicker {...props} />

      <CoreFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </CoreFormHelperText>
    </CoreBox>
  );
}
CoreDateRangepicker.validProps = [
  {
    description: "If true, the main element is focused during the first mount. This main element is: - the element chosen by the visible view if any (i.e: the selected day on the day view). - the input element if there is a field rendered.",
    name       : "autoFocus",
    types      : [{ type: "boolean", validValues: [] }],
  },
  {
    description: "The number of calendars to render on desktop.",
    name       : "calendars",
    types      : [{ default: "2", type: "number", validValues: [1, 2, 3] }],
  },
  {
    description: "Class name applied to the root element.",
    name       : "className",
    types      : [{ type: "string" }],
  },
  {
    description: "If true, the popover or modal will close after submitting the full date. Default value `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).",
    name       : "closeOnSelect",
    types      : [{ type: "boolean", validValues: [true, false] }],
  },
  {
    description: "Overridable components.\
    Deprecated - Please use slots.",
    name : "components",
    types: [{ default: {}, type: "object" }],
  },
  {
    description: "The props used for each component slot.\
    Deprecated - Please use slotProps.",
    name : "componentsProps",
    types: [{ default: {}, type: "object", validValues: [] }],
  },
  {
    description: "Position the current month is rendered in.",
    name       : "currentMonthCalendarPosition",
    types      : [{ default: "1", type: "number", validValues: [1, 2, 3] }],
  },
  {
    description: "Formats the day of week displayed in the calendar header.",
    name       : "dayOfWeekFormatter",
    types      : [{ default: "(_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()", type: "function" }],
  },
  {
    description: "Default calendar month displayed when value={[null, null]}.",
    name       : "defaultCalendarMonth",
    types      : [{ type: "any", validValues: [] }],
  },
  {
    description: "The initial position in the edited date range. Used when the component is not controlled.",
    name       : "defaultRangePosition",
    types      : [{ default: "start", type: "string", validValues: ["end", "start"] }],
  },
  {
    description: "The default value. Used when the component is not controlled.",
    name       : "defaultValue",
    types      : [{ type: "Array<any>", validValues: [] }],
  },
  {
    description: "CSS media query when Mobile mode will be changed to Desktop.",
    name       : "desktopModeMediaQuery",
    types      : [{ default: "@media (pointer: fine)", type: "string", validValues: [] }],
  },
];
CoreDateRangepicker.invalidProps = [];
