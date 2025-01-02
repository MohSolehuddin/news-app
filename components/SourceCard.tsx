import { SourceInterface } from "@/redux/features/sourceInterface";
import CardContainer from "./CardContainer";
import { Text, TouchableOpacity } from "react-native";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
interface sourceInterface {
  source: SourceInterface;
  onSelect: (source: SourceInterface) => void;
}

const SourceCard = ({ source, onSelect }: sourceInterface) => {
  const [isModalNewsBySourceOpen, setIsModalNewsBySourceOpen] = useState(false);

  return (
    <CardContainer>
      <TouchableOpacity className="pt-6 px-6" onPress={() => onSelect(source)}>
        <Text className="text-xl font-bold text-blueBlack">{source.name}</Text>
      </TouchableOpacity>
      <ModalContainer
        isOpen={isModalNewsBySourceOpen}
        setIsOpen={setIsModalNewsBySourceOpen}>
        <Text>Filter</Text>
      </ModalContainer>
    </CardContainer>
  );
};

export default SourceCard;
