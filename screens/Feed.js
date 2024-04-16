import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export const Feed = () => {
  
  const { navigate } = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigate("DetailsScreen", {title: "The Title", content: "Conteeeentt"})
      }}>
      <Text>Feed</Text>
    </Pressable>
  );
};