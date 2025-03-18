import React from 'react';

// Prop type definitions
export interface PropType {
  default?: any;
  type: string;
  validValues?: any[];
}

export interface Prop<T = any> {
  description: string;
  name: string;
  types: PropType[];
  value?: T;
}

export interface EventProp {
  description: string;
  name: string;
  types: [{ type: 'function' }];
  value?: Function;
}

// Base component data interfaces
export interface DefaultComponentData {
  height?: Prop<number>;
  width?: Prop<number>;
  styleClasses?: Prop<string>;
  key?: Prop<string>;
  ref?: Prop<React.Ref<any>>;
  children?: Prop<React.ReactNode>;
}

export interface DefaultEventData {
  onClick?: EventProp;
  onContextMenu?: EventProp;
  onDoubleClick?: EventProp;
  onMouseDown?: EventProp;
  onMouseEnter?: EventProp;
  onMouseLeave?: EventProp;
  // ... other event props
}

export interface GenericProps {
  [key: string]: any;
}

export interface BaseComponentProps {
  onClick?: () => void;
  height?: number;
  width?: number;
  styleClasses?: string;
  key?: string;
  ref?: any;
  children?: any;
}

export abstract class BaseComponentData {
  height?: Prop<number>;
  width?: Prop<number>;
  styleClasses?: Prop<string>;
  key: Prop<string>;
  ref?: Prop<React.Ref<any>>;
  children?: Prop<React.ReactNode>;

  constructor() {
    this.key = { name: "key", description: "The key of the component", types: [{ type: "string" }] };
  }
}