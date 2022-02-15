import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { AppStack } from './src/navigation/AppNavigator';
import { store } from './src/redux/store';




export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </Provider>
  );
};


