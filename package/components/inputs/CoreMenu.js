import React from 'react';
import CoreStack from '../layouts/CoreStack';

export default function CoreMenu(props) {
  return <CoreStack direction="column">{props.children}</CoreStack>;
}
