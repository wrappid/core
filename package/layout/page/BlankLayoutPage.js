// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../../components/dataDisplay/CoreTypographyBody1";
import BlankLayout from "../BlankLayout";
import CoreLayoutItem from "../core/CoreLayoutItem";

export default function BlankLayoutPage() {
  return (
    <>
      <CoreTypographyBody1>Component above layout item</CoreTypographyBody1>

      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>Blank Layout Page</CoreTypographyBody1>
        
        <CoreTypographyBody1>Content for the blank layout</CoreTypographyBody1>

        <CoreTypographyBody1>Component inside layout item</CoreTypographyBody1>

        <CoreTypographyBody1>Any other component can be added here...</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreTypographyBody1>Component below layout item</CoreTypographyBody1>

    </>
  );
}
