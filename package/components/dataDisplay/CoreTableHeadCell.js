import React from 'react';
import CoreTableCell from './CoreTableCell';
import CoreClasses from '../../styles/CoreClasses';

export default function CoreTableHeadCell(props) {
  return (
    <CoreTableCell
      {...props}
      styleClasses={[CoreClasses.TABLE.TH, ...(props?.styleClasses || [])]}>
      {props.children}
    </CoreTableCell>
  );
}
