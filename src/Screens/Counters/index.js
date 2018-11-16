import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import CounterBts from '../../Components/CounterBts'

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textoLabel:"texto label 1"
    };
  }

  render() {
    return (
      <View>
        <View>
            <Text style={{fontWeight:'bold',alignSelf:'center', marginTop:30}}>Global state first level counter: {this.props.gState.firstLevelCounter}</Text>
            <CounterBts field={this.props.gState.firstLevelCounter} onChangeState={(filed,value)=>this.props.onChangeState(filed,value)} counter={['firstLevelCounter']}/>
        </View>
        <View>
            <Text style={{fontWeight:'bold',alignSelf:'center', marginTop:30}}>Global state second level counter: {this.props.gState.Counters.secondLevelCounter}</Text>
            <CounterBts field={this.props.gState.Counters.secondLevelCounter} onChangeState={(filed,value)=>this.props.onChangeState(filed,value)} counter={['Counters','secondLevelCounter']}/>
        </View>
        <View>
            <Text style={{fontWeight:'bold',alignSelf:'center', marginTop:30}}>Global state third level counter: {this.props.gState.Counters.SecondLevelCounters.thirdLevelCounter}</Text>
            <CounterBts field={this.props.gState.Counters.SecondLevelCounters.thirdLevelCounter} onChangeState={(filed,value)=>this.props.onChangeState(filed,value)} counter={['Counters','SecondLevelCounters','thirdLevelCounter']}/>
        </View>
      </View>
    );
  }
}

export default Counters;
