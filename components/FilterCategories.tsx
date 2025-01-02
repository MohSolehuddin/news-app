import { View, Text, TouchableOpacity, ScrollView } from "react-native";
interface FilterCategoriesProps {
  categories: string[];
  activeCategory: string;
  handleCategoryClick: (category: string) => void;
}
const FilterCategories = ({
  categories,
  activeCategory,
  handleCategoryClick,
}: FilterCategoriesProps) => {
  return (
    <ScrollView
      className="bg-bluishWhite h-32 w-full border-b-2 border-blueBlack"
      horizontal={true}>
      <View className="flex flex-row gap-4">
        {categories.map((item) => (
          <TouchableOpacity
            className="w-32"
            key={item}
            onPress={() => handleCategoryClick(item)}>
            <Text className="font-bold text-center">{item}</Text>
            {item === activeCategory && (
              <View className="w-full h-[4px] bg-whiteGrey rounded-md"></View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default FilterCategories;
