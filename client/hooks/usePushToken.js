import * as Notifications from "expo-notifications";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { SET_EXPO_PUSH_TOKEN } from "../store/action";
import { registerForPushNotificationsAsync } from "../helpers/notif";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function usePushToken() {
  const dispatch = useDispatch();
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    if (expoPushToken) {
      dispatch({ type: SET_EXPO_PUSH_TOKEN, payload: expoPushToken });
    }

    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, [expoPushToken]);

  return { expoPushToken };
}
