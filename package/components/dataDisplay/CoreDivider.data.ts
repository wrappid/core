export interface ValidPropType {
  default?: any;
  type: string;
  validValues?: any[];
}

export interface ValidProp {
  description: string;
  name: string;
  types: ValidPropType[];
}

class ValidPropBuilder {
  private description: string;
  private name: string;
  private types: ValidPropType[] = [];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  addType(type: ValidPropType): ValidPropBuilder {
    this.types.push(type);
    return this;
  }

  build(): ValidProp {
    return {
      description: this.description,
      name: this.name,
      types: this.types,
    };
  }
}

export class CoreDividerData {
  validProps: ValidProp[] = [];
  invalidProps: string[] = ["style", "theme"];

  constructor() {
    this.buildValidProps();
  }

  private buildValidProps(): void {
    this.validProps.push(
      new ValidPropBuilder("absolute", "Absolutely position the element.")
        .addType({ type: "boolean", default: false, validValues: [true, false] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder(
        "component",
        "The component used for the root node. Either a string to use a HTML element or a component."
      )
        .addType({ type: "elementType" })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder(
        "flexItem",
        "If true, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.)"
      )
        .addType({ type: "boolean", default: false, validValues: [true, false] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("light", "If true, the divider will have a lighter color.")
        .addType({ type: "boolean", default: false, validValues: [true, false] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("orientation", "The component orientation.")
        .addType({ type: "string", default: "horizontal", validValues: ["horizontal", "vertical"] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("textAlign", "The text alignment.")
        .addType({ type: "string", default: "center", validValues: ["center", "left", "right"] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("variant", "The variant to use.")
        .addType({ type: "string", default: "fullWidth", validValues: ["fullWidth", "inset", "middle"] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("leftInset", "")
        .addType({ type: "boolean", validValues: [true, false] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("horizontalInset", "")
        .addType({ type: "boolean", validValues: [true, false] })
        .build()
    );
    this.validProps.push(
      new ValidPropBuilder("bold", "")
        .addType({ type: "boolean", validValues: [true, false] })
        .build()
    );
  }
}
