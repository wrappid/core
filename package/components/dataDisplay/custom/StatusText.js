import React from 'react';
import {getStatusTextColorClass} from '../../../utils/tableUtils';
import CoreTypographyCaption from '../../dataDisplay/paragraph/CoreTypographyCaption';
import CoreClasses from '../../../styles/CoreClasses';

export default function StatusText(props) {
  const {status, gridProps} = props;
  return (
    <CoreTypographyCaption
      gridProps={gridProps}
      styleClasses={[
        getStatusTextColorClass(status || ''),
        CoreClasses.TEXT.TEXT_WEIGHT_BOLD,
        CoreClasses.TEXT.TEXT_UPPERCASE,
      ]}>
      {status || 'UNKNOWN'}
    </CoreTypographyCaption>
  );
}
