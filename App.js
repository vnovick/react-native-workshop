import React from 'react';
import { 
  StatusBar, 
  Platform, 
  StyleSheet, 
  View 
} from 'react-native';

import { StackNavigator, } from 'react-navigation';
import routes from './src/config/routes';
import { initApi } from './src/services/api';

const RootNavigator = StackNavigator(routes);

console.ignoredYellowBox = ['Remote debugger'];

export default class App extends React.Component {

  componentDidMount(){
    initApi();
  }

  render(){
    return (
      <View style={styles.app}>
        <RootNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})