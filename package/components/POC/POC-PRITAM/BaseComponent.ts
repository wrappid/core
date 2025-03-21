import React, { ReactNode } from "react";

// 🎉 Extract all event handlers from React's built-in types
export type AllValidEvents = Pick<
  React.DOMAttributes<HTMLElement>,
  | "onClick"
  | "onContextMenu"
  | "onDoubleClick"
  | "onMouseDown"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseMove"
  | "onMouseOut"
  | "onMouseOver"
  | "onMouseUp"
  | "onKeyDown"
  | "onKeyPress"
  | "onKeyUp"
  | "onChange"
  | "onInput"
  | "onSubmit"
  | "onReset"
  | "onFocus"
  | "onBlur"
  | "onTouchCancel"
  | "onTouchEnd"
  | "onTouchMove"
  | "onTouchStart"
  | "onScroll"
  | "onWheel"
  | "onCopy"
  | "onCut"
  | "onPaste"
  | "onDrag"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDragStart"
  | "onDrop"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onTransitionEnd"
  | "onAbort"
  | "onCanPlay"
  | "onCanPlayThrough"
  | "onDurationChange"
  | "onEmptied"
  | "onEncrypted"
  | "onEnded"
  | "onError"
  | "onLoadedData"
  | "onLoadedMetadata"
  | "onLoadStart"
  | "onPause"
  | "onPlay"
  | "onPlaying"
  | "onProgress"
  | "onRateChange"
  | "onSeeked"
  | "onSeeking"
  | "onStalled"
  | "onSuspend"
  | "onTimeUpdate"
  | "onVolumeChange"
  | "onWaiting"
>;

// ✅ Define prop types and structure
export interface PropType {
  default?: any;
  type: string;
  validValues?: any[];
}

export interface Prop {
  description: string;
  name: string;
  types: PropType[];
  value: any; // ✅ Ensure `value` is never undefined
}

// ✅ Extend with standard React props and events
export interface BaseComponentProps extends AllValidEvents {
  height?: number;
  width?: number;
  styleClasses?: string;
  children?: ReactNode;
  key?: React.Key;
  ref?: React.Ref<any>;
}

// ✅ Base Data Class — Ensures all props have `Prop` type, no undefined
export abstract class BaseComponentData {
  [key: string]: Prop;

  height: Prop = { name: 'height', description: 'Height of the component', types: [{ type: 'number' }], value:0 };
  width: Prop = { name: 'width', description: 'Width of the component', types: [{ type: 'number' }], value:0 };
  styleClasses: Prop = { name: 'styleClasses', description: 'CSS classes', types: [{ type: 'string' }], value:'' };
  children: Prop = { name: 'children', description: 'Component children', types: [{ type: 'node' }], value:null }; // Explicitly define children
}

// ✅ BaseComponent class — Supports rendering and prop handling
export abstract class BaseComponent<T extends BaseComponentData> {
  protected props: T;

  constructor(initialProps: Partial<BaseComponentProps>) {
    this.props = {} as T;

    Object.entries(initialProps).forEach(([key, value]) => {
      if (key in this.props) {
        this.setPropValue(key as keyof T, value);
      } else {
        // Handle dynamic props like children
        (this.props as any)[key] = { value };
      }
    });

    // Ensure default values for missing props
    if (!this.props.children) {
      this.props.children = {
        name: "children",
        description: "Default children",
        types: [{ type: "node" }],
        value: null // Default children to null
      }; // Provide all required fields for Prop
    }
  }

  // Ensure "value" is accessible with proper typing
  getPropValue<K extends keyof T>(propName: K): T[K]["value"] {
    const prop = this.props[propName];
    return prop.value;
  }

  // ✅ Set and validate a prop's value
  setPropValue<K extends keyof T>(propName: K, value: any): void {
    const prop = this.props[propName];

    if (!prop) return;

    const expectedType = prop.types[0].type;
    if (typeof value !== expectedType && expectedType !== "node" && expectedType !== "function") {
      throw new Error(`Invalid type for prop "${String(propName)}". Expected ${expectedType}, got ${typeof value}`);
    }

    prop.value = value;
  }

  // ✅ Force child components to define render()
  abstract render(): JSX.Element;
}