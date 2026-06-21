import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  loading?: boolean;
  onPress: () => void;
}

export function Button({ title, loading, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className="
        h-14
        rounded-xl
        bg-blue-600
        items-center
        justify-center
      "
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white font-semibold text-base">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
