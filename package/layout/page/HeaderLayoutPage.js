// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import CoreLayoutItem from "../core/CoreLayoutItem";
import HeaderLayout from "../HeaderLayout";

export default function HeaderLayoutPage() {
  return (
    <>
      <CoreTypographyBody1>Component above {HeaderLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

      <CoreLayoutItem id={HeaderLayout.PLACEHOLDER.HEADER}>
        <CoreTypographyBody1>Content for the {HeaderLayout.PLACEHOLDER.HEADER}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {HeaderLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {HeaderLayout.PLACEHOLDER.HEADER} item</CoreTypographyBody1>

      <CoreTypographyBody1>Component above {HeaderLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

      <CoreLayoutItem id={HeaderLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>Content for the {HeaderLayout.PLACEHOLDER.CONTENT}</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside {HeaderLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below {HeaderLayout.PLACEHOLDER.CONTENT} item</CoreTypographyBody1>

    </>
  );
}