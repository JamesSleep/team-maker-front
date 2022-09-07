import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Login from '../screen/Login';

export type LoginStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  FindPassword: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  LoginStackParamsList,
  'Login'
>;
export type SignUpScreenProps = NativeStackScreenProps<
  LoginStackParamsList,
  'SignUp'
>;
export type FindPasswordScreenProps = NativeStackScreenProps<
  LoginStackParamsList,
  'FindPassword'
>;

const Stack = createNativeStackNavigator<LoginStackParamsList>();

const LoginRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginRouter;
