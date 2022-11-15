import * as Permissions from "expo-permissions";
import { db } from "../../firebase-config";
import { currentUser } from "../data/User";

export const getNotificationsPermisions = async () => {
  const response = false;

  const resultsPermisions = await Permissions.askAsync(
    Permissions.NOTIFICATIONS
  );

  if (resultsPermisions == "denied") return;

  response = true;
  return response;
};


export const notificationsToDB = (
  likesNotification,
  matchesNotifications,
  newFriendsNotification,
  newMessagesNotification
) => {
  db()
    .doc("users/" + currentUser.id)
    .update({
      likesNotification: likesNotification,
      matchesNotifications: matchesNotifications,
      newFriendsNotification: newFriendsNotification,
      newMessagesNotification: newMessagesNotification,
      notificationsPermissions: true,
    });
};
