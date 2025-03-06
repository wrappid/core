import { useEffect, useRef } from "react";

// eslint-disable-next-line import/no-unresolved
import { useNetworkStatus } from "@wrappid/native";
import { useDispatch } from "react-redux";

import { pushSnackMessage } from "../feedback/CoreSnackbar.action.ts";

export default function CoreNetworkStatus() {
  const isOnline = useNetworkStatus();
  const dispatch = useDispatch();
  const prevIsOnline = useRef(isOnline);

  useEffect(() => {
    if (prevIsOnline.current !== isOnline) {
      const message = isOnline
        ? "You are connected to the internet."
        : "You are not connected to the internet.";

      dispatch(
        pushSnackMessage( message, { autoHideDuration: 20000 })
      );
    }

    prevIsOnline.current = isOnline; // Update previous status
  }, [isOnline, dispatch]);

  return null; // No UI rendering needed
}
