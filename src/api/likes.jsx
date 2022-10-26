import { db } from "../../firebase-config";

export class LikesController {
  async addLike(toUser) {
    db()
      .doc("users/" + toUser.id)
      .update({
        likes: toUser.likes,
      });
  }
}
