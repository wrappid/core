import React from 'react';
import CoreFormHelperText from './CoreFormHelperText';
import CoreIcon from '../dataDisplay/CoreIcon';
import CoreClasses from '../../styles/CoreClasses';

export default function CoreFormErrorText(props) {
  return (
    <CoreFormHelperText
      {...props}
      styleClasses={[
        ...(props.styleClasses || []),
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
      error={true}>
      <CoreIcon styleClasses={[CoreClasses.MARGIN.MR1]}>error</CoreIcon>
      {props.children}
    </CoreFormHelperText>
  );
}
