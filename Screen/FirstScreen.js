import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.Container}>
        <Text style={{color:'white'}}> React Navigation  </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('two')} style={Styles.button} >
            <Text style={Styles.text}>Pagination </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}  onPress={()=>this.props.navigation.navigate('third')}>
            <Text style={Styles.text}>Prev Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}  onPress={()=>this.props.navigation.navigate('Ref')}>
            <Text style={Styles.text}>React Ref</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}  onPress={()=>this.props.navigation.navigate('UseReducer')}>
            <Text style={Styles.text}>Use Reducer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}  onPress={()=>this.props.navigation.navigate('VideoDemo')}>
            <Text style={Styles.text}>Scrollable Auto play Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button}  onPress={()=>this.props.navigation.navigate('Player')}>
            <Text style={Styles.text}>Video Player</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles =StyleSheet.create({
    Container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#121212'
    },
    text:{
      fontSize:20,
      color:'black',
      fontWeight:'bold'
    },
    button:{
      width:'80%',
      height:30,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#03dac6',
    }
  })