import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontWeight:'bold',alignSelf:'center', marginTop:30}}>First global state level counter: {this.props.gState.firstLevelCounter}</Text>
        <Text style={{fontWeight:'bold',alignSelf:'center', marginTop:30}}>Second global state level counter: {this.props.gState.Counters.secondLevelCounter}</Text>
        <Text style={{fontWeight:'bold',alignSelf:'center', marginTop:30}}>Third global state level counter: {this.props.gState.Counters.SecondLevelCounters.thirdLevelCounter}</Text>
      </View>
    );
  }
}

export default Results;
