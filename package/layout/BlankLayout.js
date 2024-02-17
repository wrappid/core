import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function BlankLayout() {
  return (
    <>
      <CoreLayoutPlaceholder id="header" />

      <CoreTypographyBody1>Any component can be added here...</CoreTypographyBody1>

      <CoreLayoutPlaceholder id="content" />

    </>
  );
}