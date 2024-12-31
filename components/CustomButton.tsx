import { Text, TouchableOpacity } from "react-native";
interface Props {
  onPress: () => void;
  text: string;
}
const CustomButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex justify-center items-center bg-mainBlue rounded-3xl w-full h-[50px]">
      <Text className="text-white text-center font-extrabold text-2xl">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
