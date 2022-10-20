import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import UnivesitySelectScreen from "../screens/UnivesitySelectScreen";
import AgeSelectionScreen from "../screens/AgeSelectionScreen";
import SelectPhotosScreen from "../screens/SelectPhotosScreen";
import SwipeScreen from "../screens/SwipeScreen";
import ChatScreen from "../screens/ChatScreen";
import ChatConversationScreen from "../screens/ChatConversationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PreviewProfileScreen from "../screens/PreviewProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SettingsOptionsScreen from "../screens/SettingsOptionsScreen";
import LoginScreen from "../screens/LoginScreen";
import LikesScreen from "../screens/LikesScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
         <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="UnivesitySelectScreen"
          component={UnivesitySelectScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="AgeSelectionScreen"
          component={AgeSelectionScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="SelectPhotosScreen"
          component={SelectPhotosScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="SwipeScreen"
          component={SwipeScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="ChatConversationScreen"
          component={ChatConversationScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="LikesScreen"
          component={LikesScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="PreviewProfileScreen"
          component={PreviewProfileScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: true}}
        />
        <Stack.Screen
          name="SettingsOptionsScreen"
          component={SettingsOptionsScreen}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
