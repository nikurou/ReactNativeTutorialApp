import * as React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const TextInputComponent = ({ label, style }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={style}>
      <TextInput
        label={label}
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};

export default TextInputComponent;
