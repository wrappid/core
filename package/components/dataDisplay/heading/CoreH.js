import React from 'react';
import CoreTypography from '../CoreTypography';

export default function CoreH(props) {
  //DONT use this directly instead use CoreH1 to CoreH6
  return (
    <CoreTypography
      {...props}
      component={props.__level}
      variant={props.variant ? props.variant : props.__level}>
      {props.children}
    </CoreTypography>
  );
}
