import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../Screen/MainScreen/LoginPage";
import SignUp from "../Screen/MainScreen/SignUpPage";
import Find from "../Screen/MainScreen/FindPage";
import Option from "../Screen/MainScreen/SelectOption";
import TabRouter from "./TabRouter";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Find" component={Find} />
      <Stack.Screen name="Option" component={Option} />
      <Stack.Screen name="Home" component={TabRouter} />
    </Stack.Navigator>
  )
} 

export default StackRouter;