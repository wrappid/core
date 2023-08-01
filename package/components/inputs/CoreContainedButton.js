import React from 'react';
import CoreButton from './CoreButton';

export default function CoreContainedButton(props) {
  return <CoreButton {...props} variant="contained" color={props?.color||"primary"} />;
}
