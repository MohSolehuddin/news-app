import CardContainer from "./CardContainer";
import { Text, View } from "react-native";
interface sourceInterface {
  name: string;
}

const SourceCard = ({ name }: sourceInterface) => {
  return (
    <CardContainer>
      <View className="pt-6 px-6">
        <Text className="text-xl font-bold text-blueBlack">{name}</Text>
      </View>
    </CardContainer>
  );
};

export default SourceCard;
