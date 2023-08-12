// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

import { __TableDensity } from "../../../config/constants";
import CoreMenu from "../../inputs/CoreMenu";

export default function TableDensity(props) {
  // eslint-disable-next-line no-unused-vars
  const { tableDensity, setTableDensity } = props;

  return (
    <>
      <CoreMenu
        open={true}
        OnMenuClick={(item) => {
          setTableDensity(item.id);
        }}
        menu={[
          {
            icon : "density_small",
            id   : __TableDensity.COMPACT,
            label: "Compact",
          },
          /* -- {
            id: __TableDensity.STANDARD,
            label: "Standard",
            icon: "density_medium",
          }, */
          {
            icon : "density_large",
            id   : __TableDensity.COMFORTABLE,
            label: "Comfortable",
          },
        ]}
      />
    </>
  );
}
