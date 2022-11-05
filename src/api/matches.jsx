import { db } from "../../firebase-config";
import { currentUser, matches } from "../data/User";

export class MatchController {
  async addMatch(user) {
    db()
      .doc("users/" + user.id)
      .update({
        matches: user.matches,
      });
  }

  async getMatchesCurrentUser() {
    db()
      .collection("matches/")
      .where("usersMatched", "array-contains", currentUser.id)
      .get()
      .then((q) => {
        q.forEach((d) => {
          Object.values(d.data().users)[0].id == currentUser.id
            ? matches.push({
                idMatch: d.id,
                ...Object.values(d.data().users)[1],
                time: new Date(d.data().time.seconds * 1000),
              })
            : matches.push({
                idMatch: d.id,
                ...Object.values(d.data().users)[0],
                time: new Date(d.data().time.seconds * 1000),
              });
        });
      });
  }
}
