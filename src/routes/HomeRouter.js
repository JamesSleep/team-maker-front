import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TextColor, HeaderColor, _WIDTH} from '../common/theme';
import RaidList from '../screen/TabScreen/Main/RaidList';
import RaidDetail from '../screen/TabScreen/Main/RaidDetail';

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
        name="RaidList"
        component={RaidList}
        options={{title: '레이드목록'}}
      />
      <Stack.Screen
        name="RaidDetail"
        component={RaidDetail}
        options={{title: '상세정보'}}
      />
    </Stack.Navigator>
  );
};

export default StackRouter;
