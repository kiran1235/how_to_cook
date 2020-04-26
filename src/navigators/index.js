import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as navView from '@constants/navigations';
import * as viewName from '@constants/views';
import Home from '@views/home';
import Settings from '@views/settings';
const Stack = createStackNavigator();


const ApplicationNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName={navView.HOME} 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        }        
      }}
    >
      <Stack.Screen 
        name={navView.HOME} 
        component={Home} 
        options={{ title: viewName.HOME }}
      />
      <Stack.Screen 
        name={navView.SETTINGS} 
        component={Settings} 
        options={{ title: viewName.SETTINGS }}
      />
    </Stack.Navigator>
  )  
}

export default ApplicationNavigator;

