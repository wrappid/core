import React from 'react';
import CoreTypography from '../CoreTypography';

export default function CoreTypographySubtitle2(props) {
  return (
    <CoreTypography {...props} variant="subtitle2">
      {props.children}
    </CoreTypography>
  );
}
