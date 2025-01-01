import { SourceInterface } from "@/redux/features/sourceInterface";
import CardContainer from "./CardContainer";
import { Text, TouchableOpacity } from "react-native";
interface sourceInterface {
  source: SourceInterface;
}

const SourceCard = ({ source }: sourceInterface) => {
  return (
    <CardContainer>
      <TouchableOpacity className="pt-6 px-6">
        <Text className="text-xl font-bold text-blueBlack">{source.name}</Text>
      </TouchableOpacity>
    </CardContainer>
  );
};

export default SourceCard;
