import { View, Text } from "react-native";
import React from "react";
import ButtonSettings from "./ButtonSettings";

const Settings = () => {
  return (
    <View className="h-3/4 items-center bottom-0 absolute justify-center bg-white w-full rounded-t-3xl">
      <View className="w-full items-center mb-10">
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Account"}
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Privacy settings"}
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={10}
          radiusBottomRight={10}
          text={"Push notifications"}
        />
      </View>
      <View className="w-full items-center mb-10">
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Swipe settings"}
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Help"}
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={10}
          radiusBottomRight={10}
          text={"Purchases"}
        />
      </View>
      <View className="w-full items-center">
        <ButtonSettings
          radiusTopRight={10}
          radiusTopLeft={10}
          radiusBottomLeft={0}
          radiusBottomRight={0}
          text={"Logout"}
        />
        <ButtonSettings
          radiusTopRight={0}
          radiusTopLeft={0}
          radiusBottomLeft={10}
          radiusBottomRight={10}
          text={"Delete Account"}
        />
      </View>
    </View>
  );
};

export default Settings;
