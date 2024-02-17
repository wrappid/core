import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
export const HEADER_LAYOUT_HEADER = "header_only";

export default function HeaderLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HEADER_LAYOUT_HEADER}>
      </CoreLayoutPlaceholder>
    </>
  );
}