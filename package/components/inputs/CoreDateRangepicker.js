/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDateRangepicker } from "@wrappid/native";

// import CoreFormHelperText from "./CoreFormHelperText";
// import CoreClasses from "../../styles/CoreClasses";
import CoreBox from "../layouts/CoreBox";

export default function CoreDateRangepicker(props) {
  return (
    <CoreBox>
      <NativeDateRangepicker {...props} />
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
    types      : [{ default: "2", type: "1 | 2 | 3", validValues: [] }],
  },
  {
    description: "Class name applied to the root element.",
    name       : "className",
    types      : [{ default: "", type: "string" }],
  },
  {
    description: "If true, the popover or modal will close after submitting the full date.",
    name       : "closeOnSelect",
    types      : [{ default: "`true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).", type: "bool", validValues: [] }],
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
    types      : [{ default: "1", type: "1 | 2 | 3", validValues: [] }],
  },
  {
    description: "Formats the day of week displayed in the calendar header.",
    name       : "dayOfWeekFormatter",
    types      : [{ default: "(_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()", type: "function", validValues: [] }],
  },
  {
    description: "Default calendar month displayed when value={[null, null]}.",
    name       : "defaultCalendarMonth",
    types      : [{ default: "", type: "any", validValues: [] }],
  },
  {
    description: "The initial position in the edited date range. Used when the component is not controlled.",
    name       : "defaultRangePosition",
    types      : [{ default: "start", type: "'end' | 'start", validValues: [] }],
  },
  {
    description: "The default value. Used when the component is not controlled.",
    name       : "defaultValue",
    types      : [{ default: "", type: "Array<any>", validValues: [] }],
  },
  {
    description: "CSS media query when Mobile mode will be changed to Desktop.",
    name       : "desktopModeMediaQuery",
    types      : [{ default: "@media (pointer: fine)", type: "string", validValues: [] }],
  },
];
CoreDateRangepicker.invalidProps = [];
