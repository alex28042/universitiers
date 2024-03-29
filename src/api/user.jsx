import { useNavigation } from "@react-navigation/native";
import { LogData } from "react-native/Libraries/LogBox/LogBox";
import { auth, db } from "../../firebase-config";
import storage from "../data/storage";
import { currentUser } from "../data/User";
import { usersSwipeList } from "../data/UsersSwipeList";

export class UserController {
  async createUser(user) {
    storage.set("email", currentUser.email);
    storage.set("password", currentUser.password);
    await db()
      .collection("users/")
      .add({
        email: user.email,
        name: user.name,
        bio: user.bio,
        swipeRight: user.swipeRight,
        matches: user.matches,
        photos: user.photos,
        uni: user.uni,
        gender: user.gender,
        genderSearch: user.genderSearch,
        bornDate: user.bornDate,
        swipeLeft: user.swipeLeft,
        likes: user.swipeRight,
        photosURL: user.photosURL,
        locationPrivacy: user.locationPrivacy,
        cameraPrivacy: user.cameraPrivacy,
        newFriendsNotification: user.newFriendsNotification,
        newMessagesNotification: user.newMessagesNotification,
        likesNotification: user.likesNotification,
        matchesNotifications: user.matchesNotifications,
        swipeUniversity: user.swipeUniversity,
        hideFromSwipe: user.hideFromSwipe,
        createdAt: db.FieldValue.serverTimestamp(),
        location: user.location,
        deviceLenguague: user.deviceLenguague,
        notificationsPermissions: user.notificationsPermissions,
        galleryPermissions: user.galleryPermissions,
        locationPermissions: user.locationPermissions,
        subscribed: user.subscribed,
      })
      .then(() => console.log("user created"));
  }

  async getCurrentUser(emailId) {
    await db()
      .collection("users")
      .where("email", "==", emailId)
      .get()
      .then((q) => {
        q.forEach((d) => {
          const data = d.data();
          currentUser.id = d.id;
          currentUser.email = data.email;
          currentUser.name = data.name;
          currentUser.bio = data.bio;
          currentUser.likes = data.likes;
          currentUser.matches = data.matches;
          currentUser.photos = data.photos;
          currentUser.uni = data.uni;
          currentUser.gender = data.gender;
          currentUser.genderSearch = data.genderSearch;
          currentUser.bornDate = data.bornDate;
          currentUser.swipeLeft = data.swipeLeft;
          currentUser.swipeRight = data.swipeRight;
          currentUser.photosURL = data.photosURL;
          currentUser.locationPrivacy = data.locationPrivacy;
          currentUser.cameraPrivacy = data.cameraPrivacy;
          currentUser.newFriendsNotification = data.newFriendsNotification;
          currentUser.newMessagesNotification = data.newFriendsNotification;
          currentUser.matchesNotifications = data.matchesNotifications;
          currentUser.swipeUniversity = data.swipeUniversity;
          currentUser.hideFromSwipe = data.hideFromSwipe;
          currentUser.createdAt = data.createdAt;
          currentUser.location = data.location;
          currentUser.deviceLenguague = data.deviceLenguague;
          currentUser.galleryPermissions = data.galleryPermissions;
          currentUser.locationPermissions = data.locationPermissions;
          currentUser.notificationsPermissions = data.notificationsPermissions;
          currentUser.subscribed = data.subscribed;
        });
      });
  }
  async getUsers() {
    await db()
      .collection("users/")
      .get()
      .then((q) =>
        q.forEach((d) => {
          const data = d.data();
          if (
            d.id != currentUser.id &&
            data.gender == currentUser.genderSearch &&
            !usersSwipeList.includes(data) 
          )
            usersSwipeList.push({ id: d.id, ...data });
        })
      );
  }

  async removeUsersSwipeList() {
    while (usersSwipeList.length != 0) usersSwipeList.pop();
  }
}
