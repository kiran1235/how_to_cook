import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { Provider as StoreProvider} from "react-redux";
import { DefaultTheme, Provider as PaperProvider} from "react-native-paper";

import { NavigationContainer } from '@react-navigation/native';
import applicationStore from "@stores";
import ApplicationNavigator from "@navigators";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default class App extends Component {
  render = () => {
    return (
      <StoreProvider store={applicationStore}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
              <ApplicationNavigator />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    )   
  }
}

