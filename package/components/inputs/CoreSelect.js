import React from "react";
import { getUUID } from "../../utils/appUtils";
import { SCSelect } from "../../styledComponents/inputs/SCSelect";
import CoreFormControl from "./CoreFormControl";
import CoreInputLabel from "./CoreInputLabel";
import CoreMenuItem from "./CoreMenuItem";

export default function CoreSelect (props) {
  const { label, selectID, value, handleChange, options } = props;

  return (
    <CoreFormControl fullWidth>
      <CoreInputLabel id="demo-simple-select-label">{label}</CoreInputLabel>
      <SCSelect
        labelId={selectID || `core-select-${getUUID()}`}
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <CoreMenuItem
              key={option?.id || index}
              value={option?.id || option?.label || index}
            >
              {option?.label || `Option ${index}`}
            </CoreMenuItem>
          );
        })}
      </SCSelect>
    </CoreFormControl>
  );
};
