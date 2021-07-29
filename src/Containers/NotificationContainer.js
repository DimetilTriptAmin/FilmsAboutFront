import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

import { notificationSelector } from "../redux/selectors";
import { isObjectEmpty } from "../helper";

const NotificationContainer = () => {
  const notification = useSelector(notificationSelector);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (!isObjectEmpty(notification))
      enqueueSnackbar(notification.message, {
        ...notification.options,
      });
  }, [notification]);

  return null;
};

export default NotificationContainer;
