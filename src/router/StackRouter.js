import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../Screen/MainScreen/LoginPage";
import SignUp from "../Screen/MainScreen/SignUpPage";
import Find from "../Screen/MainScreen/FindPage";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Find" component={Find} />
    </Stack.Navigator>
  )
} 

export default StackRouter;