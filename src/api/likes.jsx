import { db } from "../../firebase-config";
import { currentUser, likes } from "../data/User";

export class LikesController {
  async addLike(toUser) {
    db()
      .doc("users/" + toUser.id)
      .update({
        likes: toUser.likes,
      }).catch((e) => console.error(e));
  }

  async getLikesCurrentUser() {
    currentUser.likes.map((userId) => {
      db()
        .doc("users/" + userId)
        .get()
        .then((d) => likes.push({ id: d.id, ...d.data() }));
    });
  }
}
