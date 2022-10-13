import { View, Text } from "react-native";
import React, { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import DatePicker from "react-native-date-picker";

const AgeSelection = () => {
  const [date, setDate] = useState(new Date());
  return (
    <TailwindProvider>
      <DatePicker 
        date={date}
        onDateChange={setDate}
      />
    </TailwindProvider>
  );
};

export default AgeSelection;
