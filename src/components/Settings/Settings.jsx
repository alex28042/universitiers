import { View, Text } from "react-native";
import React from "react";
import ButtonSettings from "./ButtonSettings";

const Settings = () => {
  return (
    <View className="h-4/5 bg-white w-full rounded-lg">
      <View>
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Account"}
        />
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Privacy settings"}
        />
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Push notifications"}
        />
      </View>
      <View>
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Swipe settings"}
        />
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Help"}
        />
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Purchases"}
        />
      </View>
      <View>
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Logout"}
        />
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Delete Account"}
        />
      </View>
    </View>
  );
};

export default Settings;
