import { BaseComponentData } from "./BaseComponentData.interface";

export interface GenericProps {
  [key: string]: any;
}


export abstract class BaseComponent<T extends BaseComponentData> {
  protected props: T;

  constructor(_props: GenericProps){
    Object.keys(_props).forEach((_prop: string) => {
      this.setPropValue(_prop, _props[_prop].value);
    });
  }

//   convert(_props: GenericProps) {
//     Object.keys(_props).forEach((_prop: string) => {
//       this.setPropValue(_prop, _props[_prop].value);
//     });
//     return this.props;
//   }

  abstract render(): JSX.Element;

  /**
   * Get the value of a specific prop.
   * @param propName The name of the prop to retrieve.
   * @returns The value of the prop, or undefined if it doesn't exist.
   */
  getPropValue(propName: string): any {
    if (Object.keys(this.props).includes(propName)) {
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
    if (Object.keys(this.props).includes(propName)) {
      this.props[propName].value = value;
    } else {
      console.error(`Property ${propName} does not exist.`);
    }
  }
}

// export interface BaseComponentFC<T extends BaseComponentData> extends React.FunctionComponent {
//     // props: new BaseComponent<T>(props);
//     (
//         props: new BaseComponent<T>().convert(props),
//         deprecatedLegacyContext: null
//     ): ReactNode;
// }
// export type WFC<T extends BaseComponentData> = BaseComponentFC<T>;
