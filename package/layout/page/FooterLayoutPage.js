// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreLayoutItem from "../core/CoreLayoutItem";
import FooterLayout from "../FooterLayout";

export default function FooterLayoutPage() {
  return (
    <>
      <CoreTypographyBody1>Component above {FooterLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

      <CoreLayoutItem id={FooterLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>Content for the {FooterLayout.PLACEHOLDER.CONTENT}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {FooterLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {FooterLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

      <CoreTypographyBody1>Component above {FooterLayout.PLACEHOLDER.FOOTER} item</CoreTypographyBody1>

      <CoreLayoutItem id={FooterLayout.PLACEHOLDER.FOOTER}>
        <CoreTypographyBody1>Content for the {FooterLayout.PLACEHOLDER.FOOTER}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {FooterLayout.PLACEHOLDER.FOOTER} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {FooterLayout.PLACEHOLDER.FOOTER} item</CoreTypographyBody1>
    </>
  );
}