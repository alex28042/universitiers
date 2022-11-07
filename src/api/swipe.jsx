import { db } from "../../firebase-config";

export class SwipeController {
  async swipeRight(user, swipedUser) {
    user.swipeRight.push(swipedUser.id);
    await db()
      .doc("users/" + user.id)
      .update({
        swipeRight: user.swipeRight,
      });
  }

  async swipeLeft(currentUser, swipedUser) {
    currentUser.swipeLeft.push(swipedUser.id);
    await db()
      .doc("users/" + currentUser.id)
      .update({
        swipeLeft: currentUser.swipeLeft,
      });
  }
}
