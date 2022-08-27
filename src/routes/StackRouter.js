import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screen/MainScreen/LoginPage';
import SignUp from '../screen/MainScreen/SignUpPage';
import Find from '../screen/MainScreen/FindPage';
import Option from '../screen/MainScreen/SelectOption';
import TabRouter from './TabRouter';

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Find" component={Find} />
      <Stack.Screen name="Option" component={Option} />
      <Stack.Screen name="Home" component={TabRouter} />
    </Stack.Navigator>
  );
};

export default StackRouter;
