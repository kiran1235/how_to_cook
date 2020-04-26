import React, {Component} from 'react';
import { connect } from "react-redux";
import { Text, View, Button } from "react-native";
import * as dispatchActions from '@actions/welcome';
import * as navViews from '@constants/navigations';
import styles from '@styles';

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>{this.props.counter.value}</Text>
        <Button
          title="Increment"
          onPress={() => this.props.increment(this.props.counter.value)}
        />
        <br />
        <Button
          title="Decrement"
          onPress={() => this.props.decrement(this.props.counter.value)}
        />
        <br />
        <Button
          title="Reset"
          onPress={() => this.props.reset()}
        />
        <br />
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate(navViews.SETTINGS, this.props.state.welcome)}
        />

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { 
      counter: state.welcome.counter,
      state: state 
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      console.log(value);
      dispatch(dispatchActions.increment(value));
    },
    decrement: (value) => {
      dispatch(dispatchActions.decrement(value));
    },
    reset: () => {
      dispatch(dispatchActions.reset());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
