import * as Permissions from "expo-permissions";
import { db } from "../../firebase-config";
import { currentUser } from "../data/User";

export const getGalleryPermissions = async () => {
  const response = false;

  const resultsPermission = await Permissions.askAsync(
    Permissions.MEDIA_LIBRARY
  );

  if (resultsPermission == "denied") return;

  response = true;

  return response;
};

export const galleryToDB = () => {
  db()
    .doc("users/" + currentUser.id)
    .update({
        
    });
};
