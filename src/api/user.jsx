import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebase-config";
import storage from "../data/storage";
import { currentUser } from "../data/User";
import { usersSwipeList } from "../data/UsersSwipeList";

export class UserController {
  async createUser(user, email, password, name) {
    storage.set("email", email);
    storage.set("password", password);
    user.email = email;
    user.name = name;
    await db()
      .collection("users/")
      .add({
        email: user.email,
        bio: user.bio,
        likes: user.likes,
        matches: user.matches,
        photos: user.photos,
        uni: user.uni,
      })
      .then(() => console.log("user created"));
  }
  async getCurrentUser(emailId) {
    await db()
      .collection("users/")
      .where("email", "==", emailId)
      .get()
      .then((q) => {
        q.forEach((d) => {
          const data = d.data();
          currentUser.email = data.email;
          currentUser.bio = data.bio;
          currentUser.likes = data.likes;
          currentUser.matches = data.matches;
          currentUser.photos = data.photos;
          currentUser.uni = data.uni;
        });
      });
  }
  async getUsers() {
    await db()
      .collection("users/")
      .where("email", "!=", currentUser.email)
      .get()
      .then((q) =>
        q.forEach((d) => {
          const data = d.data();
          usersSwipeList.push(data);
        })
      );
  }
}
