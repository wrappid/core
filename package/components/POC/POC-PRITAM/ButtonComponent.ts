import React from 'react';
import { BaseComponent, WFC } from './BaseComponent';
import { NativeDivider } from '@wrappid/native';
import { BaseComponentData, Prop } from './Types';

// Define CoreDivider-specific props interface
export interface CoreDividerProps {
  absolute?: boolean;
  component?: React.ElementType;
  flexItem?: boolean;
  light?: boolean;
  orientation?: 'horizontal' | 'vertical';
  textAlign?: 'center' | 'left' | 'right';
  variant?: 'fullWidth' | 'inset' | 'middle';
  leftInset?: boolean;
  horizontalInset?: boolean;
  bold?: boolean;
}

// Data class for CoreDivider component
class CoreDividerData extends BaseComponentData {
  absolute: Prop<boolean> = {
    name: 'absolute',
    description: 'Absolutely position the element.',
    types: [{ type: 'boolean', default: false }],
    value: false,
  };

  component: Prop<React.ElementType> = {
    name: 'component',
    description: 'Component used for the root node.',
    types: [{ type: 'elementType' }],
  };

  flexItem: Prop<boolean> = {
    name: 'flexItem',
    description:
      'If true, a vertical divider will have the correct height in a flex container.',
    types: [{ type: 'boolean', default: false }],
    value: false,
  };

  light: Prop<boolean> = {
    name: 'light',
    description: 'If true, the divider will have a lighter color.',
    types: [{ type: 'boolean', default: false }],
    value: false,
  };

  orientation: Prop<'horizontal' | 'vertical'> = {
    name: 'orientation',
    description: 'The component orientation.',
    types: [
      {
        type: 'string',
        default: 'horizontal',
        validValues: ['horizontal', 'vertical'],
      },
    ],
    value: 'horizontal',
  };

  textAlign: Prop<'center' | 'left' | 'right'> = {
    name: 'textAlign',
    description: 'The text alignment.',
    types: [
      {
        type: 'string',
        default: 'center',
        validValues: ['center', 'left', 'right'],
      },
    ],
    value: 'center',
  };

  variant: Prop<'fullWidth' | 'inset' | 'middle'> = {
    name: 'variant',
    description: 'The variant to use.',
    types: [
      {
        type: 'string',
        default: 'fullWidth',
        validValues: ['fullWidth', 'inset', 'middle'],
      },
    ],
    value: 'fullWidth',
  };

  leftInset: Prop<boolean> = {
    name: 'leftInset',
    description: 'If true, the divider will be indented to the left.',
    types: [{ type: 'boolean' }],
  };

  horizontalInset: Prop<boolean> = {
    name: 'horizontalInset',
    description: 'If true, the divider will be indented to the left and right.',
    types: [{ type: 'boolean' }],
  };

  bold: Prop<boolean> = {
    name: 'bold',
    description: 'If true, the divider will be bold.',
    types: [{ type: 'boolean' }],
  };

  onClick?: Prop<Function>;
}

// Class-based implementation of CoreDivider
class CoreDividerClass extends BaseComponent<CoreDividerData> {
  createComponentData(): CoreDividerData {
    return new CoreDividerData();
  }

  render(): JSX.Element {
    // Extract plain prop values
    const props = this.extractPropValues();

    // Ensure children is a valid ReactNode (default to null if invalid)
    const children = props.children ?? null;

    return <NativeDivider {...props}>{children}</NativeDivider>;
  }
}

// Functional wrapper for CoreDivider using WFC
const CoreDivider: WFC<CoreDividerData> = (props) => {
  const component = new CoreDividerClass(props);
  return component.render();
};

CoreDivider.componentType = CoreDividerClass;

export default CoreDivider;