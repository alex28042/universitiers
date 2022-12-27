import { Linking } from "react-native";
import { db } from "../../firebase-config";
import initStripe from "../../initilizeStripe";

export async function createCheckout(uid) {
  const checkoutSessionRef = await db()
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      price: "price_1MEe3tKEbbYpdkJ1W5QtVONP",
    });

  checkoutSessionRef.onSnapshot(async (snap) => {
    const sessionId  = snap.data();

    if (sessionId) {
      const stripe = await initStripe();


      stripe.redirectToCheckout({ sessionId });
    }
  });
}
