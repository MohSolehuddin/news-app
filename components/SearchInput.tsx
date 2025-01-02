import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TextInput, View } from "react-native";

interface SearchInputProps {
  onSubmit: (text: string, ...args: any) => void;
}
const SearchInput = ({ onSubmit, ...props }: SearchInputProps) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
        {...props}
        className="bg-bluishWhite border-blueBlack border-[.2px] rounded-3xl pl-16 px-6 py-4 w-full mb-6"
      />
      <MaterialIcons
        name="search"
        size={24}
        color="#9CA3AF"
        className="absolute top-4 left-6"
      />
    </View>
  );
};

export default SearchInput;
