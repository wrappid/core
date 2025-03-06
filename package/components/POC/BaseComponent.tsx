import { BaseComponentData } from "./BaseComponentData.interface";

export interface GenericProps {
  [key: string]: any;
}

export abstract class BaseComponent<T extends BaseComponentData> {
  protected props: T;

  constructor(_props: GenericProps) {
    // Initialize this.props before using it
    this.props = {} as T;

    Object.keys(_props).forEach((_prop: string) => {
      this.setPropValue(_prop, _props[_prop]?.value || _props[_prop]);
    });
  }

  abstract render(): JSX.Element;

  /**
   * Get the value of a specific prop.
   * @param propName The name of the prop to retrieve.
   * @returns The value of the prop, or undefined if it doesn't exist.
   */
  getPropValue(propName: string): any {
    if (this.props && Object.keys(this.props).includes(propName)) {
      return this.props[propName]?.value;
    } else {
      return undefined;
    }
  }

  /**
   * Set the value of a specific prop.
   * @param propName The name of the prop to set.
   * @param value The new value for the prop.
   */
  setPropValue(propName: string, value: any): void {
    if (this.props && Object.keys(this.props).includes(propName)) {
      this.props[propName].value = value;
    } else {
      // Create the property if it doesn't exist
      if (!this.props) {
        this.props = {} as T;
      }
      // We need to handle the case where the property doesn't exist yet
      (this.props as any)[propName] = { value };
    }
  }
}
