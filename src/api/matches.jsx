export class MatchController {
  async addMatch(user) {
    db()
      .doc("users/" + user.id)
      .update({
        matches: user.matches,
      });
  }
}
