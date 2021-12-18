import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeRouter from "./HomeRouter";
import MakeRaid from "./MakeRouter";
import MyInfo from "./MyInfoRouter";
import Setting from "./SettingRouter";
import Icon from "react-native-vector-icons/AntDesign";
import { TextColor, InputColor, _WIDTH, ButtonColor, _HEIGHT } from "../Common/theme";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Main": { iconName = "team"; break; }
            case "MakeRaid": { iconName = "edit"; break; }
            case "MyInfo": { iconName = "calendar"; break; }
            case "Setting": { iconName = "setting"; break; }
          }
          return <Icon name={iconName} size={size * 1.3} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: ButtonColor,
        tabBarInactiveTintColor: "#95a5a6",
        headerShown: false,
        tabBarStyle: {
          height: _HEIGHT * 0.08,
          position: 'absolute',
          justifyContent: "center",
          alignItems: "center",
          bottom: _HEIGHT * 0.035,
          marginHorizontal: _WIDTH * 0.04,
          paddingTop: Platform.OS === "ios" ? 10 : 0,
          paddingBottom: Platform.OS === "ios" ? 10 : 0,
          borderRadius: 15,
          backgroundColor: TextColor,
        }
      })}
    >
      <Tab.Screen name="Main" component={HomeRouter} />
      <Tab.Screen name="MakeRaid" component={MakeRaid} />
      <Tab.Screen name="MyInfo" component={MyInfo} />
      <Tab.Screen name="Setting" component={Setting} />    
    </Tab.Navigator>
  )
}