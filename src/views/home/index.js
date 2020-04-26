import React, {Component} from 'react';
import { connect } from "react-redux";
import { View } from "react-native";
import { Button } from 'react-native-paper';
import * as navActions from '@constants/navigations';

class Home extends Component {
  render() {
    return (
      <View>
        <Button 
          icon="home" 
          mode="contained" 
          onPress={() => this.props.navigation.navigate(navActions.SETTINGS, this.props.state)}
        >
          Cusinies
        </Button> 

        <Button 
          icon="settings" 
          mode="contained" 
          onPress={() => this.props.navigation.navigate(navActions.SETTINGS, this.props.state)}
        >
          Settings
        </Button>          
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      state: state 
  }
};

// const mapDispatchToProps = (dispatch) => {  
//   // return {
//   //   increment: (value) => {
//   //     console.log(value);
//   //     dispatch(dispatchActions.increment(value));
//   //   },
//   //   decrement: (value) => {
//   //     dispatch(dispatchActions.decrement(value));
//   //   },
//   //   reset: () => {
//   //     dispatch(dispatchActions.reset());
//   //   }
//   // }
// }

export default connect(mapStateToProps)(Home);
