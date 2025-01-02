import { SourceInterface } from "@/redux/features/sourceInterface";
import CardContainer from "./CardContainer";
import { Text, TouchableOpacity } from "react-native";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
interface sourceInterface {
  source: SourceInterface;
  onSelect: (source: string) => void;
}

const SourceCard = ({ source, onSelect }: sourceInterface) => {
  const dispatch = useAppDispatch();
  const [isModalNewsBySourceOpen, setIsModalNewsBySourceOpen] = useState(false);
  const { pages, selectedSource } = useAppSelector(
    (state) => state.newsByCategory
  );

  const handleSourceClick = (source: string) => {
    // dispatch(fetchMoreNews({ pages, source: selectedSource }));
  };

  return (
    <CardContainer>
      <TouchableOpacity
        className="pt-6 px-6"
        onPress={() => onSelect(source.name)}>
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
