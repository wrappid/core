/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { useNetworkStatus } from "@wrappid/native";

import CoreAlert from "../feedback/CoreAlert";
import CoreSnackbar from "../feedback/CoreSnackbar";

// import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreNetworkStatus() {
//   props = sanitizeComponentProps(CoreSnackbar, props);
  const isOnline = useNetworkStatus();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  React.useEffect(() => {
    if (!isOnline) {
      setOpenSnackbar(true);
    } 
  }, [isOnline]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <CoreSnackbar
      open={openSnackbar}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      autoHideDuration={isOnline ? 6000 : null}
      // message={`${isOnline ? "🟢 You are connected" : "🔴 You are not connected"} to the internet.`}
      onClose={handleCloseSnackbar}
    >
      <>
        <CoreAlert
          severity="success"
          variant="filled"
        >
          {`${isOnline ? "🟢 You are connected" : "🔴 You are not connected"} to the internet.`}

        </CoreAlert>
      </>
    </CoreSnackbar>

  );
}

