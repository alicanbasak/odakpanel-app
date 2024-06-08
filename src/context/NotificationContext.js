import React, { createContext, useContext, useState } from "react";
import NotificationSnackbar from "../components/global/NotificationSnackbar";

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    open: false,
  });

  const showNotification = (message, type) => {
    setNotification({
      message,
      type,
      open: true,
    });
  };

  const closeNotification = () => {
    setNotification({
      ...notification,
      open: false,
    });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationSnackbar
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
    </NotificationContext.Provider>
  );
};
