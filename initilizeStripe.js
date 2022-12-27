import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const initStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51LiOtxKEbbYpdkJ18XhgKkboyB14CkI4T5kXZUzyBEp44T6pJRFz66N1vIujoGBkFNppOXSQ8oGUIRwl4ZXq4LFN00R0flZlpg"
    );
  }
};

export default initStripe;