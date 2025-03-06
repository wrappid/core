import { CLEAR_SNACK_MESSAGE, MESSAGE_SHOWED, PUSH_SNACK_MESSAGE, REMOVE_SNACK_MESSAGE } from "../../store/types/appTypes";

/**
 * Snack message related action
 */
export const pushSnackMessage = (message, snackProps) => dispatch => {
  // eslint-disable-next-line etc/no-commented-out-code
  // enqueueSnackbar(message, { variant: type });
  const time = new Date().getTime();

  dispatch({
    payload: {
      _timestamp: time,
      // eslint-disable-next-line etc/no-commented-out-code
      // autoHideDuration: autoHideDuration || 5000,
      message   : message || "Message not provided",
      ...snackProps
    },
    type: PUSH_SNACK_MESSAGE,
  });
};

export const messageShowed = (timestamp) => ({
  payload: { _timestamp: timestamp },
  type   : MESSAGE_SHOWED,
});

export const removeSnackMessage = (timestamp) => ({
  payload: { _timestamp: timestamp },
  type   : REMOVE_SNACK_MESSAGE,
});

export const clearSnackMessages = () => dispatch => {
  // eslint-disable-next-line etc/no-commented-out-code
  // closeSnackbar();
  dispatch({ type: CLEAR_SNACK_MESSAGE });
};