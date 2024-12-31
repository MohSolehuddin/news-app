import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";

interface SafeAreaShellProps {
  children: React.ReactNode;
  isScrollView?: boolean;
}
const SafeAreaShell = ({
  children,
  isScrollView = true,
}: SafeAreaShellProps) => {
  return (
    <SafeAreaView className="pt-4 bg-bluishWhite h-full w-full">
      <StatusBar style="dark" />
      {isScrollView ? (
        <Animated.ScrollView className="px-6">{children}</Animated.ScrollView>
      ) : (
        <Animated.View className="px-6 pt-4">{children}</Animated.View>
      )}
    </SafeAreaView>
  );
};

export default SafeAreaShell;
