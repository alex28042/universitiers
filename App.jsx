import { StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_7000Bold } from "@expo-google-fonts/poppins";
import Navigation from "./src/navigation/Navigation";
import "expo-dev-client";
import { StripeProvider } from "@stripe/stripe-react-native";

const STRIPE_KEY =
  "pk_test_51LiOtxKEbbYpdkJ18XhgKkboyB14CkI4T5kXZUzyBEp44T6pJRFz66N1vIujoGBkFNppOXSQ8oGUIRwl4ZXq4LFN00R0flZlpg";

export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_KEY}>
      <Navigation />
    </StripeProvider>
  );
}
