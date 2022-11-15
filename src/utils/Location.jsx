import * as Localization from "expo-localization";
import * as Permissions from "expo-permissions";
import { currentUser } from "../data/User";
import * as Location from "expo-location";
import { db } from "../../firebase-config";
export const getLenguagueDevice = () =>
  (currentUser.deviceLenguague = Localization.locale);

export const getCurrentLocation = async () => {
  const response = { status: false, location: null };
  const resultsPermissionsLocation = await Permissions.askAsync(
    Permissions.LOCATION_FOREGROUND
  );

  if (resultsPermissionsLocation == "denied") return;

  const location = await Localization.getLocalizationAsync();
  const position = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  response.status = true;
  response.location = position;

  return response;
};

export const locationToDB = (location, locationPrivacy) => {
  currentUser.de;
  db()
    .doc("users/" + currentUser.id)
    .update({
      location: location,
      locationPrivacy: locationPrivacy,
    });
};

export const deviceLenguagueToDB = (deviceLenguague) => {
  db()
    .doc("users/" + currentUser.id)
    .update({
      deviceLenguague: deviceLenguague,
      locationPermissions: true
    });
};
