import "react-native-gesture-handler";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Navigation } from "./Navigation";


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});
