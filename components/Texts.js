import { Text, StyleSheet } from "react-native";
import {
  useFonts,
  RedHatDisplay_300Light,
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
  RedHatDisplay_700Bold,
  RedHatDisplay_800ExtraBold,
  RedHatDisplay_900Black,
  RedHatDisplay_300Light_Italic,
  RedHatDisplay_400Regular_Italic,
  RedHatDisplay_500Medium_Italic,
  RedHatDisplay_600SemiBold_Italic,
  RedHatDisplay_700Bold_Italic,
  RedHatDisplay_800ExtraBold_Italic,
  RedHatDisplay_900Black_Italic,
} from '@expo-google-fonts/red-hat-display';


export const TitleText = ({children, ...props}) => {
  
  const [fontLoaded] = useFonts({RedHatDisplay_700Bold});

  if (!fontLoaded) {
    return (
      <Text>Fetching fonts...</Text>
    )
  } 

  return (
    <Text style={styles.titleText} {...props}>
      {children}
    </Text>
  )
};

export const HeadingText = ({children, ...props}) => {

  const [fontLoaded] = useFonts({RedHatDisplay_700Bold});

  if (!fontLoaded) {
    return <Text>Fetching fonts...</Text>
  }

  return (
    <Text style={styles.headingText} {...props}>
      { children }
    </Text>
  )

}

const styles = StyleSheet.create({
  titleText: {
    color: "white",
    fontSize: 32,
    fontFamily: "RedHatDisplay_700Bold"
  },
  headingText: {
    color: "white",
    fontSize: 16,
    fontFamily: "RedHatDisplay_700Bold"
  }
});
