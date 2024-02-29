import CoreTypographyBody1 from "../../dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "../../../layout/CoreLayoutPlaceholder";

export default function ComplexLayout() {
  return (
    <>
      <CoreTypographyBody1>Complex Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id="placeholder1">
        <CoreLayoutPlaceholder id="placeholder4">
          <CoreTypographyBody1>Placeholder 4</CoreTypographyBody1>
        </CoreLayoutPlaceholder>

        <CoreLayoutPlaceholder id="placeholder5">
          <CoreTypographyBody1>Placeholder 5</CoreTypographyBody1>

          <CoreLayoutPlaceholder id="placeholder7">
            <CoreTypographyBody1>Placeholder 7</CoreTypographyBody1>
          </CoreLayoutPlaceholder>
        </CoreLayoutPlaceholder>
      </CoreLayoutPlaceholder>

      <CoreLayoutPlaceholder id="placeholder2">
        <CoreLayoutPlaceholder id="placeholder6">
          <CoreTypographyBody1>Placeholder 6</CoreTypographyBody1>
        </CoreLayoutPlaceholder>

        <CoreLayoutPlaceholder id="placeholder8">
          <CoreTypographyBody1>Placeholder 8</CoreTypographyBody1>
        </CoreLayoutPlaceholder>
      </CoreLayoutPlaceholder>

      <CoreLayoutPlaceholder id="placeholder3"></CoreLayoutPlaceholder>
    </>
  );
}

ComplexLayout.PLACEHOLDER = {
  CONTENT1: "content1", CONTENT2: "content2", CONTENT3: "content3", CONTENT4: "content4", CONTENT5: "content5", CONTENT6: "content6", CONTENT7: "content7", CONTENT8: "content8" 
};
 