import { useAppSelector } from "@/redux/features/hooks";
import { SafeAreaView, StatusBar, View } from "react-native";
import WebView from "react-native-webview";
const ArticleWebView = () => {
  const { articlesActiveLink } = useAppSelector(
    (state) => state.newsByCategory
  );

  return (
    <SafeAreaView className="w-screen h-screen bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="w-full h-[31px]"></View>
      <WebView source={{ uri: articlesActiveLink }} className="w-full h-4/5" />
    </SafeAreaView>
  );
};

export default ArticleWebView;
