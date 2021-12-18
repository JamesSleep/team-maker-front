import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextColor, HeaderColor, _WIDTH } from "../Common/theme";
import JoinList from "../Screen/TabScreen/MyInfo/JoinedList";
import DetailJoin from "../Screen/TabScreen/MyInfo/DetailJoin";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator 
      initialRouteName="" 
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: HeaderColor, height: 150 },
        headerTitleAlign: "center",
        headerTintColor: TextColor,
        headerTitleStyle: {
          fontSize: _WIDTH * 0.05,
          fontWeight: "bold"
        }
      })}
    >
      <Stack.Screen name="JoinList" component={JoinList} options={{ title: "참가목록" }}/>
      <Stack.Screen name="DetailJoin" component={DetailJoin} options={{ title: "상세정보" }}/>
    </Stack.Navigator>
  )
} 

export default StackRouter;