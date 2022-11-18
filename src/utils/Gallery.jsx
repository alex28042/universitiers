import * as Permissions from "expo-permissions";
import { db } from "../../firebase-config";
import { currentUser } from "../data/User";

export const getGalleryPermissions = async () => {
  const response = false;

  if (currentUser.galleryPermissions) return true;

  const resultsPermission = await Permissions.askAsync(
    Permissions.MEDIA_LIBRARY
  );

  if (resultsPermission == "denied") return;


  response = true;
  currentUser.galleryPermissions = response;
  
  return response;
};

export const galleryToDB = (galleryPermissions) => {
  db()
    .doc("users/" + currentUser.id)
    .update({
      galleryPermissions: galleryPermissions
    });
};
