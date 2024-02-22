// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React, { useState, useEffect } from "react";

import CoreSnackbar from "../components/feedback/CoreSnackbar";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

function OnlineStatusSnackbar() {
  const isOnline = useOnlineStatus();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setOpenSnackbar(true);
  }, [isOnline]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <CoreSnackbar
      open={openSnackbar}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      autoHideDuration={6000}
      message={`You are ${isOnline ? "connected" : "not connected"} to the internet.`}
      onClose={handleCloseSnackbar}
    />
  );
}

export default OnlineStatusSnackbar;
