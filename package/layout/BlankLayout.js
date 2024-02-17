import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
import CoreClasses from "../styles/CoreClasses";

export default function BlankLayout() {
  return (
    <CoreLayoutPlaceholder id={BlankLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.PADDING.P1]} />
  );
}

BlankLayout.PLACEHOLDER = { CONTENT: "content" };
