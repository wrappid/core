import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function BlankLayoutPage() {
  return (
    <>
      <CoreLayoutItem id="header" />

      <CoreTypographyBody1>Any component can be added here...</CoreTypographyBody1>

      <CoreLayoutItem id="content" />
    </>
  );
}
