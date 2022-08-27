import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TextColor, HeaderColor, _WIDTH} from '../common/theme';
import SelectRaid from '../screen/TabScreen/MakeRaid/SelectRaid';
import DetailRaid from '../screen/TabScreen/MakeRaid/DetailRaid';

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: HeaderColor, height: 150},
        headerTitleAlign: 'center',
        headerTintColor: TextColor,
        headerTitleStyle: {
          fontSize: _WIDTH * 0.05,
          fontWeight: 'bold',
        },
      })}
    >
      <Stack.Screen
        name="SelectRaid"
        component={SelectRaid}
        options={{title: '파티모집'}}
      />
      <Stack.Screen
        name="DetailRaid"
        component={DetailRaid}
        options={{title: '상세설정'}}
      />
    </Stack.Navigator>
  );
};

export default StackRouter;
