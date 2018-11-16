import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {gState,changObjState} from './src/GlobalState'
import Counters from './src/Screens/Counters'
import Results from './src/Screens/Results'

import {createMaterialTopTabNavigator} from 'react-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     gState:gState
    };
  }
  render() {
    const AppTabNavigator = createMaterialTopTabNavigator({
      Home:{ screen : props => <Counters {...props} gState={this.state.gState} onChangeState={(fields,val)=>{this.setState({gState:changObjState(this.state.gState,fields,val)})}}/>  ,
        navigationOptions:{
          tabBarLabel:'Counters',
        }
      },
      Info: { screen :  props => <Results {...props} gState={this.state.gState} onChangeState={(fields,val)=>{this.setState({gState:changObjState(this.state.gState,fields,val)})}}/> ,
        navigationOptions:{
          tabBarLabel:'Results',
        }
      },
    },{
      tabBarPosition:'bottom',
      tabBarOptions:{
        activeTintColor:'#fff',
        indicatorStyle:{
          height:0
        },
      },
    });
    return (
      <AppTabNavigator />
    );
  }
}
