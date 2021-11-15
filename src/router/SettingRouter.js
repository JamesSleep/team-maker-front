import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../Screen/TabScreen/Setting/MenuList";
import MyInfo from "../Screen/TabScreen/Setting/MyInfo";
import PassFind from "../Screen/MainScreen/FindPage";
import TeamInfo from "../Screen/TabScreen/Setting/TeamInfo";
import Question from "../Screen/TabScreen/Setting/Question";
import { TextColor, HeaderColor, _WIDTH } from "../Common/theme";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Menu" 
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
      <Stack.Screen name="Menu" component={Menu} options={{ title: "설정" }}/>
      <Stack.Screen name="MyInfo" component={MyInfo} options={{ title: "내 정보" }} />
      <Stack.Screen name="PassFind" component={PassFind} options={{ title: "비밀번호 변경" }} />
      <Stack.Screen name="TeamInfo" component={TeamInfo} options={{ title: "팀 정보" }} />
      <Stack.Screen name="Question" component={Question} options={{ title: "문의하기" }} />
    </Stack.Navigator>
  )
} 

export default StackRouter;