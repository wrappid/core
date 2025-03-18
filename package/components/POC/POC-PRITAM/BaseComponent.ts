import React, { ReactNode } from 'react';
import { BaseComponentData, GenericProps } from './Types';

// Abstract base class for all components
export abstract class BaseComponent<T extends BaseComponentData> {
  protected props: T;

  constructor(_props: GenericProps) {
    this.props = this.createComponentData();

    Object.keys(_props).forEach((_prop) => {
      this.setPropValue(_prop, _props[_prop]);
    });
  }

  abstract createComponentData(): T;

  abstract render(): JSX.Element;

  /**
   * Convert raw props into structured data
   */
  convert(props: GenericProps): T {
    Object.keys(props).forEach((_prop) => {
      this.setPropValue(_prop, props[_prop]);
    });
    return this.props;
  }

  /**
   * Extract plain prop values
   */
  extractPropValues(): Record<string, any> {
    const values: Record<string, any> = {};
    Object.keys(this.props).forEach((key) => {
      const prop = (this.props as any)[key];
      if (prop && typeof prop === 'object' && 'value' in prop) {
        values[key] = prop.value;
      }
    });
    return values;
  }

  /**
   * Set a specific prop's value
   */
  setPropValue(propName: string, value: any): void {
    if (this.props && propName in this.props) {
      (this.props as any)[propName].value = value;
    }
  }
}

// Functional component wrapper interface
export interface BaseComponentFC<T extends BaseComponentData> extends React.FunctionComponent {
  (props: GenericProps): ReactNode;
  componentType: new (props: GenericProps) => BaseComponent<T>;
}

// Alias for convenience
export type WFC<T extends BaseComponentData> = BaseComponentFC<T>;