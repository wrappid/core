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

export class CoreSnackbarData {
  validProps: ValidProp[] = [];
  invalidProps: string[] = [];

  constructor() {
    this.buildValidProps();
  }

  private buildValidProps(): void {
    this.validProps.push(
      new ValidPropBuilder(
        "action",
        "The action to display. It renders after the message, at the end of the snackbar."
      ).addType({ type: "node" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "anchorOrigin",
        "The anchor position of the Snackbar."
      ).addType({
        type: "object",
        default: { horizontal: "left", vertical: "bottom" },
        validValues: [{ horizontal: ["center", "left", "right"], vertical: ["bottom", "top"] }],
      }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "autoHideDuration",
        "The number of milliseconds before auto-hiding the Snackbar."
      ).addType({ type: "number" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "children",
        "Replace the SnackbarContent component."
      ).addType({ type: "element" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "disableWindowBlurListener",
        "If true, the auto-hide duration will expire even if the window is not focused."
      ).addType({ type: "boolean", default: false }).build()
    );

    this.validProps.push(
      new ValidPropBuilder("message", "The message to display.")
        .addType({ type: "string" })
        .build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "onClose",
        "Callback fired when the component requests to be closed."
      ).addType({ type: "function" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "open",
        "If true, the component is shown."
      ).addType({ type: "boolean" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "resumeHideDuration",
        "The number of milliseconds before dismissing after user interaction."
      ).addType({ type: "number" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "TransitionComponent",
        "The component used for the transition."
      ).addType({ type: "elementType", default: "Grow" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "transitionDuration",
        "The duration for the transition, in milliseconds."
      ).addType({ type: "object" }).build()
    );

    this.validProps.push(
      new ValidPropBuilder(
        "TransitionProps",
        "Props applied to the transition element."
      ).addType({ type: "object", default: {} }).build()
    );
  }
}