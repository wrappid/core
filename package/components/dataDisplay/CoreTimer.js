// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useEffect, useState } from "react";

import CoreTypographyBody2 from "./CoreTypographyBody2";
import CoreClasses from "../../styles/CoreClasses";
import { sanitizeComponentProps } from "../../utils/componentUtil";
import CoreTextButton from "../inputs/CoreTextButton";
import CoreBox from "../layouts/CoreBox";

function defaultAction() {
  // eslint-disable-next-line no-console
  console.warn("Action is missing");
}

/**
 * CoreTimer component is used to show the timer
 * @param {*} props 
 * @returns 
 */
export default function CoreTimer(props) {
  props = sanitizeComponentProps(CoreTimer, props);
  const {
    seconds,
    action,
    actionLabel,
    timerLabel,
    startOnButtonPress,
  } = props;

  /**
    * Component should extend for hour and minutes
    */
  const [timer, setTimer] = useState(seconds);
  const [isTimerRunning, setIsTimerRunning] = useState(!startOnButtonPress);

  useEffect(() => {
    if (isTimerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTimerRunning, timer]);

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.MARGIN.MT1]}>
      {!isTimerRunning && startOnButtonPress ? (
        <CoreTextButton
          onClick={handleStart}
          label={actionLabel || "Start Timer"}
        />
      ) : timer === 0 ? (
        <CoreTextButton onClick={action || defaultAction} label={actionLabel} />
      ) : (
        <CoreTypographyBody2
          styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.MARGIN.MT1, CoreClasses.COLOR.TEXT_PRIMARY]}
        >
          {timerLabel ? timerLabel + " 00:" + timer.toString().padStart(2, "0") : "00:" + timer.toString().padStart(2, "0")}
        </CoreTypographyBody2>
      )}
    </CoreBox>
  );
}

CoreTimer.validProps = [
  ...CoreBox.validProps,
  ...CoreTypographyBody2.validProps,
  {
    description: "The number of seconds for the timer",
    name       : "seconds",
    types      : [
      {
        default: 0,
        type   : "number",
      }
    ],
  },
  {
    description: "The function to call on click of the button after the timer is complete",
    name       : "action",
    types      : [
      {
        default: null,
        type   : "function",
      }
    ],
  },
  {
    description: "The label for the button",
    name       : "actionLabel",
    types      : [
      {
        default: "",
        type   : "string",
      }
    ],
  },
  {
    description: "The label for the timer",
    name       : "timerLabel",
    types      : [
      {
        default: "",
        type   : "string",
      }
    ],
  },
  {
    description: "The timer will start when the button is pressed",
    name       : "startOnButtonPress",
    types      : [
      {
        default: false,
        type   : "boolean",
      }
    ],
  },
];

CoreTimer.invalidProps = [];
