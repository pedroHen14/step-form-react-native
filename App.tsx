import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Step1, Step2, Step3 } from './src/screens';
import { StepRegisterProvider } from './src/contexts';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <StepRegisterProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Step1"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Step1" component={Step1}/>
          <Stack.Screen name="Step2" component={Step2}/>
          <Stack.Screen name="Step3" component={Step3}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StepRegisterProvider>
  );
}