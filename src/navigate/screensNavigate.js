import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screen/profile';
import InfoDriver from '../screen/infoDriver';
import SeasonList from '../screen/seasonList';
import QueryResults from '../screen/queryResult';




let ScreensNavigator =()=> {
  const Stack = createStackNavigator()
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="InfoDriver" component={InfoDriver}/>
          <Stack.Screen name="SeasonList" component={SeasonList}/>
          <Stack.Screen name="QueryResults" component={QueryResults}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default ScreensNavigator