import { db } from "../../firebase-config";

export class SwipeController {
  async swipeRight(currentUser, swipedUser) {
    currentUser.swipeRight.push(swipedUser.id);
    await db()
      .doc("users/" + currentUser.id)
      .update({
        swipeRight: currentUser.swipeRight,
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
