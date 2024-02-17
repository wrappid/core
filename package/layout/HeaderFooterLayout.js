import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
export const HEADER_FOTTER_LAYOUT_HEADER = "header_footer_only";

export default function HeaderFooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HEADER_FOTTER_LAYOUT_HEADER}>
      </CoreLayoutPlaceholder>
    </>
  );
}