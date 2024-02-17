// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function HeaderLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id={HeaderLayout.PLACEHOLDER.HEADER} />

      <CoreLayoutPlaceholder id={HeaderLayout.PLACEHOLDER.CONTENT} />
    </>
  );
}

HeaderLayout.PLACEHOLDER = { CONTENT: "content", HEADER: "header" };
