import { View, Text, TextInput } from "react-native";
import React from "react";

const SettingsScreens = (props) => {
  switch (props.name) {
    case props.name === "Account":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Name"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Birthday"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"University"}
            />
          </View>
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Gender"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Username"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Change password"}
            />
          </View>
        </View>
      );
    case props.name === "Privacy settings":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Blocked users"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Location"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Camera"}
            />
          </View>
        </View>
      );
    case props.name === "Push notifications":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"New friends"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Messages"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Someone likes you"}
            />
          </View>
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Matches"}
            />
          
          </View>
        
        </View>
      );
    case props.name === "Swipe settings":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Hide from Swipe"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Preferred gender"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Preferred University"}
            />
          </View>
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Location"}
            />
        
          </View>

        </View>
      );
    case props.name === "Help":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
          <View>
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"I have a question"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Contact us"}
            />
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Take me to Privacy settings"}
            />
          </View>
          
        </View>
      );
    case props.name === "Purchases":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
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
    
    case props.name === "Delete Account":
      return (
        <View className="h-3/4 w-full rounded-full bg-white">
          <Text>Delete</Text>
          <Text>your account?</Text>
          <Text>you won't able to recover your account</Text>
          <Text>Write DELETE</Text>
          <TextInput placeholder="DELETE" className="w-3/4 h-10 rounded-full" style={{backgroundColor: "#9FA0FF"}}/>
        </View>
      );
  }
};

export default SettingsScreens;
