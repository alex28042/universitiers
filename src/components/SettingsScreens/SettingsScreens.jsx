import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import ButtonSettings from "../Settings/ButtonSettings";

const SettingsScreens = (props) => {
  console.log(props.name, props.name == "Account")


  switch (props.name) {
    case "Account":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11 justify-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Name"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Birthday"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"University"}
            />
          </View>
          <View className=" w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Gender"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Username"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Change password"}
            />
          </View>
        </View>
      );
    case "Privacy settings":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Blocked users"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Location"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Camera"}
            />
          </View>
        </View>
      );
    case "Push notifications":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11" >
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"New friends"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Messages"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Someone likes you"}
            />
          </View>
          <View className="w-full items-center">
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
    case "Swipe settings":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Hide from Swipe"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Preferred gender"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Preferred University"}
            />
          </View>
          <View className="w-full items-center">
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
    case "Help":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center">
            <ButtonSettings
              radiusTopRight={10}
              radiusTopLeft={10}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"I have a question"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={0}
              radiusBottomRight={0}
              text={"Contact us"}
            />
            <ButtonSettings
              radiusTopRight={0}
              radiusTopLeft={0}
              radiusBottomLeft={10}
              radiusBottomRight={10}
              text={"Take me to Privacy settings"}
            />
          </View>
        </View>
      );
    case "Purchases":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="">
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
        
        </View>
      );
    
    case "Delete Account":
      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <Text>Delete</Text>
          <Text>your account?</Text>
          <Text>you won't able to recover your account</Text>
          <Text>Write DELETE</Text>
          <TextInput placeholder="DELETE" className="w-3/4 h-10 rounded-full" style={{backgroundColor: "#9FA0FF"}}/>
          <TouchableOpacity className="bottom-0 absolute mb-7 h-10 w-20 rounded-full items-center justify-center" style={{backgroundColor: "#9FA0FF"}}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      );
  }
};

export default SettingsScreens;
