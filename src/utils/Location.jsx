import * as Localization from "expo-localization";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { currentUser } from "../data/User";
import { db } from "../../firebase-config";

export const getLenguagueDevice = () =>
  (currentUser.deviceLenguague = Localization.locale);

export const getCurrentLocation = async () => {
  if (currentUser.locationPermissions) return;

  Location.requestBackgroundPermissionsAsync().then((response) => {
    const r = { status: false, location: null };
    console.log(response);
    if (response.status != "denied") {
      const { location } = Localization.region;
      const region = location;

      r.status = true;
      r.location = region;

    }
    
    return r;
  });
};

export const locationToDB = (location, locationPrivacy) => {
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
      locationPermissions: true,
    });
};
