import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flexDirection:"row",alignSelf:'center'}}>
        <TouchableOpacity style={styles.bt}
          onPress={()=>this.props.onChangeState(this.props.counter,this.props.field-1)}
        >
          <Text style={{fontSize:30,alignSelf:'center',fontWeight:'bold',color:'#fff'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bt}
          onPress={()=>this.props.onChangeState(this.props.counter,this.props.field+1)}
        >
          <Text style={{fontSize:30,alignSelf:'center',fontWeight:'bold',color:'#fff'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bt:{
      height:60,
      width:60,
      margin:10,
      backgroundColor: 'blue',
      justifyContent: 'center',
  }
});
export default Button;
