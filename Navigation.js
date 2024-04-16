import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MainFeed } from "./screens/tabScreens/MainFeed";
import { AntDesign } from '@expo/vector-icons';
import { User } from "./screens/tabScreens/User";
import DetailsScreen from "./screens/homeStack/DetailsScreen";
import { Feed } from "./screens/Feed";
import { useFonts, RedHatDisplay_700Bold,RedHatDisplay_700Bold_Italic } from '@expo-google-fonts/red-hat-display';
import { Text } from "react-native";

// top tabs
const TopTabs = createMaterialTopTabNavigator();

const TopTabsGroup = () => {

  const [fontLoaded] = useFonts({RedHatDisplay_700Bold, RedHatDisplay_700Bold_Italic} );

  if (!fontLoaded) {
    return <Text> Loading </Text>
  }

  return (
    <TopTabs.Navigator
      tab
      sceneContainerStyle={{
        backgroundColor: "#121212",
      }}
      screenOptions={( { route }) => ({
      }, {
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontSize: 24,
          fontFamily: "RedHatDisplay_700Bold",
          color: "#F1F1F1",
          width: "auto",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#3D4262"
        },
        tabBarStyle: {
          backgroundColor: "#121212",
          padding: 4,
        },
        lazy: true,
      })}>
      <TopTabs.Screen component={Feed} name="To Watch" />
      <TopTabs.Screen component={Feed} name="Paused" />
      <TopTabs.Screen component={Feed} name="Watching" />
      <TopTabs.Screen component={Feed} name="Completed" />
      <TopTabs.Screen component={Feed} name="Dropped" />
    </TopTabs.Navigator>
  )
};

// stack
const HomeStack = createStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Feed" 
        component={Feed} 
      />
      <HomeStack.Screen 
        name="DetailsScreen" 
        component={DetailsScreen}
        options={{
            presentation: "modal",
          }} 
      />
    </HomeStack.Navigator>
  );  
};

// bottom tab
const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;

        switch (route.name) {
          case "MainFeed":
            iconName = "home";
            break;
          case "User": 
            iconName = "user";
            break;
          default:
            iconName = "home";
        }

        return <AntDesign name={iconName} size={24} color={focused ? "#F1F1F1" : "#B6B6B6"} />;
      },
      headerStyle: {
        backgroundColor: "#121212",
      },
      headerTitleStyle: {
        color: "#FFFFFF"
      },
      tabBarActiveBackgroundColor: "#121212",
      tabBarActiveTintColor: "#F1F1F1",
      tabBarInactiveTintColor: "#B6B6B6",
      tabBarStyle: {
        backgroundColor: "#1A1A1A",
      },
    })}
  >
      <Tab.Screen 
        name="MainFeed"
        component={TopTabsGroup}
        options={{
          title: "KDTW",
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: "RedHatDisplay_700Bold_Italic",
            color: "#FFD0EC",
          }
        }}  
      />
      {/* <Tab.Screen 
        name="HomeStackGroup" 
        component={HomeStackGroup} 
        options={{headerShown: false}} 
      />
      <Tab.Screen 
        name="User" 
        component={User} 
      /> */}
    </Tab.Navigator>
  )
};

export const Navigation = () => {
  return (
    <NavigationContainer >
      <TabGroup />
    </NavigationContainer>
  )
}