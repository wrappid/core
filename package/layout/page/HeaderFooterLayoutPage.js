import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreLayoutItem from "../core/CoreLayoutItem";
import HeaderFooterLayout from "../HeaderFooterLayout";

export default function HeaderFooterLayoutPage() {
  return (
    <>
      <CoreTypographyBody1>Component above {HeaderFooterLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.HEADER}>
        <CoreTypographyBody1>Content for the {HeaderFooterLayout.PLACEHOLDER.HEADER}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {HeaderFooterLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {HeaderFooterLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

      <CoreTypographyBody1>Component above {HeaderFooterLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>Content for the {HeaderFooterLayout.PLACEHOLDER.CONTENT}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {HeaderFooterLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {HeaderFooterLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

      <CoreTypographyBody1>Component above {HeaderFooterLayout.PLACEHOLDER.FOOTER} item</CoreTypographyBody1>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.FOOTER}>
        <CoreTypographyBody1>Content for the {HeaderFooterLayout.PLACEHOLDER.FOOTER}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {HeaderFooterLayout.PLACEHOLDER.FOOTER} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {HeaderFooterLayout.PLACEHOLDER.FOOTER} item</CoreTypographyBody1>

    </>
  );
}