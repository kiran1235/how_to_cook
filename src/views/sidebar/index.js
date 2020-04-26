import React, {Component} from 'react';
import { connect } from "react-redux";
import { Text, View, Button } from "react-native";
import * as navViews from '@constants/navigations';
import styles from '@styles';

class Sidebar extends React.Component {
    render() {
      return (
        <View style={styles.container} >
          <Text>How to cook</Text>
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
  
const mapStateToProps = (state) => {};
  
const mapDispatchToProps = (dispatch) => { return dispatch; }
  
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
  
