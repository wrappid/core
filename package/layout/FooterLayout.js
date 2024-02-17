import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function FooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={FooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={FooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}
FooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "footer" };