import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";
export const FOOTER_LAYOUT_HEADER = "footer_only";

export default function FooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={FOOTER_LAYOUT_HEADER}>
      </CoreLayoutPlaceholder>
    </>
  );
}