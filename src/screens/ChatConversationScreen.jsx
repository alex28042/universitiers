import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import HeaderConversation from "../components/HeaderConversation";
import SenderMessage from "../components/Conversation/SenderMessage";
import RecieverMessage from "../components/Conversation/RecieverMessage";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../../firebase-config";
import { currentUser } from "../data/User";

const ChatConversationScreen = ({ route }) => {
  const { userDataChat } = route.params;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db()
      .doc("matches/" + userDataChat.idMatch)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((q) => {
        setMessages(
          q.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
  }, [userDataChat, db()]);

  const sendMessage = () => {
    if (input != "") {
      db()
        .doc("matches/" + userDataChat.idMatch)
        .collection("messages/")
        .add({
          userId: currentUser.id,
          displayName: currentUser.name,
          message: input,
          createdAt: db.FieldValue.serverTimestamp(),
        });
    }

    setInput("");
  };
  
  return (
    <Layout>
      <HeaderConversation userDataChat={userDataChat} />
      <View style={{ height: "75%", marginTop: 30 }} className="w-full">
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item: message }) =>
            message.userId === currentUser.id ? (
              <SenderMessage message={message} key={message.id} />
            ) : (
              <RecieverMessage message={message} key={message.id} />
            )
          }
        />
      </View>
      <View className="w-full h-20 items-center justify-center bottom-0 absolute flex flex-row">
        <TextInput
          style={{ fontFamily: "Poppins_500Medium" }}
          className="w-3/4 h-10 rounded-xl bg-white px-2"
          placeholder="Send you message"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity
          onPress={() => sendMessage()}
          className="ml-4 h-10 w-10 rounded-full bg-white items-center justify-center"
        >
          <Ionicons name="arrow-forward-outline" size={20} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default ChatConversationScreen;
