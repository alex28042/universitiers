import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import React, { useState } from "react";
import ButtonSettings from "../Settings/ButtonSettings";
import { auth, db } from "../../../firebase-config";
import Navigation from "../../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import storage from "../../data/storage";
import { currentUser } from "../../data/User";
import MatchPopUp from "../Match/MatchPopUp";
import { Ionicons } from "@expo/vector-icons";
import SelectList from "react-native-dropdown-select-list";
import SwitchWithIcons from "react-native-switch-with-icons";

const SettingsScreens = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibleGender, setVisibleGender] = useState(false);
  const [visibleUniversity, setVisibleUniversity] = useState(false);
  const [genderCurrentUser, setGenderCurrentUser] = useState("");
  const [genderSearchUser, setGenderSearchUser] = useState("");
  const [universitiesList, setUniversitiesList] = useState([{ value: "UPM" }]);
  const [university, setUniversity] = useState("");
  const [DeleteInput, setDeleteInput] = useState("");

  const [genderList, setGenderList] = useState([
    { value: "Man" },
    { value: "Woman" },
  ]);

  const [genderListSearch, setGenderListSearch] = useState([
    { value: "Man" },
    { value: "Woman" },
    { value: "Both" },
  ]);

  const getCredentialsCurrrentUser = async () => {
    setEmail(await storage.get("email"));
    setPassword(await storage.get("password"));
  };

  getCredentialsCurrrentUser();

  const handleDelete = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        user.user.delete();
      })
      .then(() => {
        storage.remove("email");
        storage.remove("password");
        db()
          .doc("users/" + currentUser.id)
          .delete();

        db()
          .collection("matches/")
          .where("usersMatched", "array-contains", currentUser.id)
          .get()
          .then((q) => {
            q.docs.map((d) => {
              db()
                .doc("matches/" + d.id)
                .delete();
            });
          });
      })
      .then(() => navigation.navigate("RegisterScreen"));
  };

  switch (props.name) {
    case "Account":
      return (
        <>
          <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
            <View className="w-full items-center mb-11 justify-center">
              <TextInput
                defaultValue={currentUser.name}
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  fontFamily: "Poppins_700Bold",
                }}
                className="w-3/4 justify-center h-10 px-3"
                placeholder="Name"
              />

              <View
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  fontFamily: "Poppins_700Bold",
                }}
                className="w-3/4 justify-center h-10"
              >
                <View className="flex flex-row">
                  <TextInput
                    style={{ fontFamily: "Poppins_700Bold", marginBottom: 2 }}
                    placeholder="DD"
                    className="ml-3"
                    defaultValue={currentUser.bornDate[0]}
                  />
                  <Text style={{ fontFamily: "Poppins_700Bold" }}>/</Text>
                  <TextInput
                    style={{
                      fontFamily: "Poppins_700Bold",
                      marginBottom: 2,
                      marginLeft: 2,
                    }}
                    placeholder="MM"
                    defaultValue={currentUser.bornDate[1]}
                  />
                  <Text style={{ fontFamily: "Poppins_700Bold" }}>/</Text>
                  <TextInput
                    style={{
                      fontFamily: "Poppins_700Bold",
                      marginBottom: 2,
                      marginLeft: 2,
                    }}
                    placeholder="YYYY"
                    defaultValue={currentUser.bornDate[2]}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                className="w-3/4 justify-center h-10"
                onPress={() => setVisibleUniversity(true)}
              >
                <View className="flex flex-row items-center w-full justify-between">
                  <Text
                    style={{ fontFamily: "Poppins_700Bold" }}
                    className="ml-3"
                  >
                    University
                  </Text>
                  <Text
                    className="mr-3"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                    {currentUser.uni}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className=" w-full items-center">
              <TouchableOpacity
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                className="w-3/4 justify-center h-10"
                onPress={() => setVisibleGender(true)}
              >
                <View className="flex flex-row items-center w-full justify-between">
                  <Text
                    style={{ fontFamily: "Poppins_700Bold" }}
                    className="ml-3"
                  >
                    Gender
                  </Text>
                  <View className="flex flex-row">
                    <Text style={{ fontFamily: "Poppins_500Medium" }}>
                      {currentUser.gender}
                    </Text>
                    <Text style={{ fontFamily: "Poppins_500Medium" }}>/</Text>
                    <Text
                      className="mr-3"
                      style={{ fontFamily: "Poppins_500Medium" }}
                    >
                      {currentUser.genderSearch}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                className="w-3/4 justify-center h-10"
                onPress={() => navigation.navigate("ResetPasswordScreen")}
              >
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  Change passworrd
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <MatchPopUp visible={visibleUniversity}>
            <Ionicons
              name="close-outline"
              size={40}
              onPress={() => setVisibleUniversity(false)}
            />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg mt-5"
            >
              University settings
            </Text>
            <View className="w-3/4 h-10 mt-10">
              <SelectList
                placeholder="Select University"
                searchPlaceholder="University"
                dropdownStyles={{
                  backgroundColor: "#9FA0FF",
                  borderWidth: 0,
                  zIndex: 10,
                }}
                boxStyles={{
                  backgroundColor: "#9FA0FF",
                  borderWidth: 0,
                  zIndex: 10,
                }}
                inputStyles={{ fontFamily: "Poppins_500Medium" }}
                dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
                setSelected={setUniversity}
                data={universitiesList}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setVisibleUniversity(false);
              }}
              style={{ backgroundColor: "#9FA0FF" }}
              className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
            >
              <Text style={{ fontFamily: "Poppins_700Bold" }}>Save</Text>
            </TouchableOpacity>
          </MatchPopUp>
          <MatchPopUp visible={visibleGender}>
            <Ionicons
              name="close-outline"
              size={40}
              onPress={() => setVisibleGender(false)}
            />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg mt-5"
            >
              Gender settings
            </Text>
            <View className="w-3/4 h-10 mb-10 mt-4">
              <SelectList
                placeholder="Select your gender"
                searchPlaceholder="Gender"
                dropdownStyles={{ backgroundColor: "#9FA0FF", borderWidth: 0 }}
                boxStyles={{ backgroundColor: "#9FA0FF", borderWidth: 0 }}
                inputStyles={{ fontFamily: "Poppins_500Medium" }}
                dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
                setSelected={setGenderCurrentUser}
                data={genderList}
              />
            </View>
            <View className="w-3/4 h-10">
              <SelectList
                placeholder="What are you Searching"
                searchPlaceholder="Gender"
                dropdownStyles={{ backgroundColor: "#9FA0FF", borderWidth: 0 }}
                boxStyles={{ backgroundColor: "#9FA0FF", borderWidth: 0 }}
                inputStyles={{ fontFamily: "Poppins_500Medium" }}
                dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
                setSelected={setGenderSearchUser}
                data={genderListSearch}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setVisibleGender(false);
              }}
              style={{ backgroundColor: "#9FA0FF" }}
              className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
            >
              <Text style={{ fontFamily: "Poppins_700Bold" }}>Save</Text>
            </TouchableOpacity>
          </MatchPopUp>
        </>
      );
    case "Privacy settings":
      const [valueLoaction, setValueLoaction] = useState(false);
      const [valueCamera, setValueCamera] = useState(false);
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
            <TouchableOpacity
              style={{
                backgroundColor: "#9FA0FF",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
              className="w-3/4 justify-center h-10"
              onPress={() => null}
            >
              <View className="flex flex-row w-full items-center justify-between">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  Location
                </Text>
                <Switch
                  trackColor={{ true: "#00000" }}
                  value={valueLoaction}
                  onValueChange={setValueLoaction}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#9FA0FF",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              className="w-3/4 justify-center h-10"
              onPress={() => null}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  Camera
                </Text>
                <Switch value={valueCamera} onValueChange={setValueCamera} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    case "Push notifications":
      const [valueNewFriends, setValueNewFriends] = useState(false);
      const [valueMatches, setValueMatches] = useState(false);
      const [valueLikes, setvalueLikes] = useState(false);
      const [valueMessages, setValueMessages] = useState(false);

      return (
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
          <View className="w-full items-center mb-11">
            <TouchableOpacity
              style={{
                backgroundColor: "#9FA0FF",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
              className="w-3/4 justify-center h-10"
              onPress={() => null}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  New friends
                </Text>
                <Switch
                  value={valueNewFriends}
                  onValueChange={setValueNewFriends}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#9FA0FF",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
              className="w-3/4 justify-center h-10"
              onPress={() => null}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  Messages
                </Text>
                <Switch
                  value={valueMessages}
                  onValueChange={setValueMessages}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#9FA0FF",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              className="w-3/4 justify-center h-10"
              onPress={() => null}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  Someone likes you
                </Text>
                <Switch value={valueLikes} onValueChange={setvalueLikes} />
              </View>
            </TouchableOpacity>
          </View>
          <View className="w-full items-center">
            <TouchableOpacity
              style={{
                backgroundColor: "#9FA0FF",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              className="w-3/4 justify-center h-10"
              onPress={() => null}
            >
              <View className="flex flex-row items-center w-full justify-between">
                <Text
                  style={{ fontFamily: "Poppins_700Bold" }}
                  className="ml-3"
                >
                  Matches
                </Text>
                <Switch value={valueMatches} onValueChange={setValueMatches} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    case "Swipe settings":
      const [valueHideSwipe, setValueHideSwipe] = useState(false);
      const [visiblePreferedGender, setVisiblePreferedGender] = useState(false);
      const [visibleUniversitySearch, setVisibleUniversitySearch] =
        useState(false);
      const [universitySearch, setUniversitySearch] = useState("");

      return (
        <>
          <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl justify-center items-center bg-white">
            <View className="w-full items-center mb-11">
              <TouchableOpacity
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                className="w-3/4 justify-center h-10"
                onPress={() => null}
              >
                <View className="flex flex-row items-center w-full justify-between">
                  <Text
                    style={{ fontFamily: "Poppins_700Bold" }}
                    className="ml-3"
                  >
                    Hide from swipe
                  </Text>
                  <Switch
                    value={valueHideSwipe}
                    onValueChange={setValueHideSwipe}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                className="w-3/4 justify-center h-10"
                onPress={() => setVisiblePreferedGender(true)}
              >
                <View className="flex flex-row items-center w-full justify-between">
                  <Text
                    style={{ fontFamily: "Poppins_700Bold" }}
                    className="ml-3"
                  >
                    Preffered gender
                  </Text>
                  <Text
                    className="mr-2"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                    {currentUser.genderSearch}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#9FA0FF",
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                className="w-3/4 justify-center h-10"
                onPress={() => setVisibleUniversitySearch(true)}
              >
                <View className="flex flex-row items-center w-full justify-between">
                  <Text
                    style={{ fontFamily: "Poppins_700Bold" }}
                    className="ml-3"
                  >
                    Swipe university Settings
                  </Text>
                  <Text
                    className="mr-2"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                    All
                  </Text>
                </View>
              </TouchableOpacity>
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
          <MatchPopUp visible={visiblePreferedGender}>
            <Ionicons
              name="close-outline"
              size={40}
              onPress={() => setVisiblePreferedGender(false)}
            />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg mt-5"
            >
              Gender settings
            </Text>
            <View className="w-3/4 mt-10 h-10">
              <SelectList
                placeholder="What are you Searching"
                searchPlaceholder="Gender"
                dropdownStyles={{ backgroundColor: "#9FA0FF", borderWidth: 0 }}
                boxStyles={{ backgroundColor: "#9FA0FF", borderWidth: 0 }}
                inputStyles={{ fontFamily: "Poppins_500Medium" }}
                dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
                setSelected={setGenderSearchUser}
                data={genderListSearch}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setVisiblePreferedGender(false);
              }}
              style={{ backgroundColor: "#9FA0FF" }}
              className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
            >
              <Text style={{ fontFamily: "Poppins_700Bold" }}>Save</Text>
            </TouchableOpacity>
          </MatchPopUp>
          <MatchPopUp visible={visibleUniversitySearch}>
            <Ionicons
              name="close-outline"
              size={40}
              onPress={() => setVisibleUniversitySearch(false)}
            />
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-lg mt-5"
            >
              Swipe university Settings
            </Text>
            <View className="w-3/4 h-10 mt-10">
              <SelectList
                placeholder="Select University"
                searchPlaceholder="University"
                dropdownStyles={{
                  backgroundColor: "#9FA0FF",
                  borderWidth: 0,
                  zIndex: 10,
                }}
                boxStyles={{
                  backgroundColor: "#9FA0FF",
                  borderWidth: 0,
                  zIndex: 10,
                }}
                inputStyles={{ fontFamily: "Poppins_500Medium" }}
                dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
                setSelected={setUniversitySearch}
                data={universitiesList}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setVisibleUniversitySearch(false);
              }}
              style={{ backgroundColor: "#9FA0FF" }}
              className="bottom-5 absolute w-40 items-center justify-center h-14 rounded-2xl"
            >
              <Text style={{ fontFamily: "Poppins_700Bold" }}>Save</Text>
            </TouchableOpacity>
          </MatchPopUp>
        </>
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
        <View className="h-3/4 w-full bottom-0 absolute rounded-t-3xl items-center bg-white">
          <View className="w-full ml-32 mt-24 mb-4">
            <Text
              className="text-3xl"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              Delete
            </Text>
            <Text
              className="text-3xl mb-7"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              your account?
            </Text>
            <Text style={{ fontFamily: "Poppins_500Medium" }}>
              you won't able to recover
            </Text>
            <Text className="mb-16" style={{ fontFamily: "Poppins_500Medium" }}>
              your account
            </Text>
            <Text style={{ fontFamily: "Poppins_700Bold" }}>Write DELETE</Text>
          </View>
          <TextInput
            onChangeText={(text) => setDeleteInput(text)}
            placeholder="DELETE"
            className="w-3/4 h-10 px-2 rounded-full"
            style={{
              backgroundColor: "#9FA0FF",
              fontFamily: "Poppins_700Bold",
            }}
          />
          <TouchableOpacity
            className="bottom-0 absolute mb-7 h-10 w-20 rounded-full items-center justify-center"
            style={{ backgroundColor: "#9FA0FF" }}
            onPress={() => {
              if (DeleteInput === "delete" || DeleteInput === "DELETE") {
                handleDelete(email, password);
              }
            }}
          >
            <Text style={{ fontFamily: "Poppins_700Bold" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      );
  }
};

export default SettingsScreens;
