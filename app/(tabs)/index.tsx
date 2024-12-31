import { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export class index extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className="w-full h-full bg-blue-darkBlue">
          <Text className="text-2xl text-white"> textInComponent </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default index;
