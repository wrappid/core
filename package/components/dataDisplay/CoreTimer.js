// eslint-disable-next-line unused-imports/no-unused-imports
import React, { useEffect, useState } from "react";

import CoreClasses from "../../styles/CoreClasses";
import CoreTextButton from "../inputs/CoreTextButton";
import CoreBox from "../layouts/CoreBox";
import CoreTypographyBody2 from "./CoreTypographyBody2";

export default function CoreTimer({ seconds, action, actionLabel, timerLabel }) {
  /***
     * Component should extend for hour and minutes
     */
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    if(timer > 0){
      //Implementing the setInterval method
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      
      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    timer === 0 ?
      <CoreBox
        styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.MARGIN.MT1]}>
        <CoreTextButton OnClick={action} label={actionLabel} />
      </CoreBox>
      :
      <CoreTypographyBody2 
        styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.MARGIN.MT1]}
      >
        {timerLabel ? timerLabel + "00:" + timer.toString().padStart(2, "0") : "00:" + timer.toString().padStart(2, "0")}
      </CoreTypographyBody2>
  );
}
