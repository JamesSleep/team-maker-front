import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../Screen/MainScreen/LoginPage";

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  )
} 

export default StackRouter;