import { TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {}

export function Input(props: Props) {
  return (
    <View className="w-full">
      <TextInput
        {...props}
        className="
          w-full
          h-14
          px-4
          rounded-xl
          bg-white
          border
          border-gray-200
          text-base
        "
        placeholderTextColor="#8A8A8A"
      />
    </View>
  );
}
