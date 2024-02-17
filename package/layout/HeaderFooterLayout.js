import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function HeaderFooterLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={HeaderFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

HeaderFooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "footer", HEADER: "header" };