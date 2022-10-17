import { View, Text } from "react-native";
import React, { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AgeSelection = () => {
  const [date, setDate] = useState(new Date());
  return (
    <TailwindProvider>
      <RNDateTimePicker value={new Date()} onChange={setDate}/>
    </TailwindProvider>
  );
};

export default AgeSelection;
