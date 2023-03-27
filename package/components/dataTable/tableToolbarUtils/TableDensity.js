import React from "react";
import { __TableDensity } from "../../../config/constants";
import CoreMenu from "../../inputs/CoreMenu";

export default function TableDensity(props) {
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
            id: __TableDensity.COMPACT,
            label: "Compact",
            icon: "density_small",
          },
          /*  {
            id: __TableDensity.STANDARD,
            label: "Standard",
            icon: "density_medium",
          }, */
          {
            id: __TableDensity.COMFORTABLE,
            label: "Comfortable",
            icon: "density_large",
          },
        ]}
      />
    </>
  );
}
