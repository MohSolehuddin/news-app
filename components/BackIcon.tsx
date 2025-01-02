import { colorsConstant } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

const BackIcon = () => {
  return (
    <MaterialIcons
      name="arrow-back"
      size={24}
      color={colorsConstant.blueBlack}
    />
  );
};

export default BackIcon;
