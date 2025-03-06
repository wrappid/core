interface PropType {
  default?: any;
  type: string;
  validValues?: any[];
}

export interface Prop {
  description: string;
  name: string;
  types: PropType[];
  value?: any;
}

interface EventProp{
    description: string;
    name: string;
    types: [{
        type: Function;
    }];
    value?: Function;
} 

interface DefaultComponentData {
    height?: Prop;
    width?: Prop;
    styleClasses?: Prop;
    key: Prop;
    ref?: Prop;
    children?: Prop;
}
interface DefaultEventData {
    onClick?: EventProp;
    onContextMenu?: EventProp;
    onDoubleClick?: EventProp;
    onMouseDown?: EventProp;
    onMouseEnter?: EventProp;
    onMouseLeave?: EventProp;
    onMouseMove?: EventProp;
    onMouseOut?: EventProp;
    onMouseOver?: EventProp;
    onMouseUp?: EventProp;
    onKeyDown?: EventProp;
    onKeyPress?: EventProp;
    onKeyUp?: EventProp;
    onChange?: EventProp;
    onInput?: EventProp;
    onInvalid?: EventProp;
    onSubmit?: EventProp;
    onReset?: EventProp;
    onFocus?: EventProp;
    onBlur?: EventProp;
    onTouchCancel?: EventProp;
    onTouchEnd?: EventProp;
    onTouchMove?: EventProp;
    onTouchStart?: EventProp;
    onScroll?: EventProp;
    onWheel?: EventProp;
    onCopy?: EventProp;
    onCut?: EventProp;
    onPaste?: EventProp;
    onDrag?: EventProp;
    onDragEnd?: EventProp;
    onDragEnter?: EventProp;
    onDragExit?: EventProp;
    onDragLeave?: EventProp;
    onDragOver?: EventProp;
    onDragStart?: EventProp;
    onDrop?: EventProp;
    onAnimationStart?: EventProp;
    onAnimationEnd?: EventProp;
    onAnimationIteration?: EventProp;
    onTransitionEnd?: EventProp;
    onAbort?: EventProp;
    onCanPlay?: EventProp;
    onCanPlayThrough?: EventProp;
    onDurationChange?: EventProp;
    onEmptied?: EventProp;
    onEncrypted?: EventProp;
    onEnded?: EventProp;
    onError?: EventProp;
    onLoadedData?: EventProp;
    onLoadedMetadata?: EventProp;
    onLoadStart?: EventProp;
    onPause?: EventProp;
    onPlay?: EventProp;
    onPlaying?: EventProp;
    onProgress?: EventProp;
    onRateChange?: EventProp;
    onSeeked?: EventProp;
    onSeeking?: EventProp;
    onStalled?: EventProp;
    onSuspend?: EventProp;
    onTimeUpdate?: EventProp;
    onVolumeChange?: EventProp;
    onWaiting?: EventProp;
}

export abstract class BaseComponentData implements DefaultComponentData, DefaultEventData{
    /**
     * The name of the component
     */
    // name?: string;
    // description?: string;

    height?: Prop | undefined;
    width?: Prop | undefined;
    styleClasses?: Prop | undefined;
    key: Prop;
    ref?: Prop | undefined;
    children?: Prop | undefined;
    onClick?: EventProp | undefined;

    constructor(){
      this.key= {name:"key", description: "The key of the component", types: [{type: "string"}]}
    }
  
}

export interface BaseComponentProps {
    onClick?: ()=> void,
    height?: number,
    width?: number,
    styleClasses?: string,
    key?: string,
    ref?: any,
    children?: any
}