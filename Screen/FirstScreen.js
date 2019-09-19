import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class FirstScreen extends Component {
  static navigationOptions = {
    header: null,
    };
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  toggleTheme(){
    this.setState({
      toggle:!this.state.toggle
    }, ()=>console.log(this.state.toggle))
    
  }

  render() {
    const test= this.state.toggle
    console.log('testetste',test)
    return (
      <View style={[Styles.Container,{ backgroundColor: test?'#FFF':'#000'}]}>
        <TouchableOpacity style={Styles.togglebutton} onPress={()=> this.toggleTheme()}>
            <Text style={Styles.text}>Toggle Theme? {this.state.toggle} </Text>
        </TouchableOpacity>

        <Icon name="address" size={50} color={test?'black':'white'}></Icon>
        <Text style={{color:test?'black':'white',fontSize:20,}}> React Navigation  </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('two')} style={Styles.button} >
          <View style={{flexDirection:'row'}}>
            <Icon name="colours" size={25} color="white"></Icon>
            <Text style={Styles.text}>Pagination </Text>
          </View>
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
      // backgroundColor:'#FFF'
      
    },
    text:{
      fontSize:20,
      color:'black',
      fontWeight:'bold',
      paddingLeft:15
    },
    button:{
      width:'80%',
      height:30,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#03dac6',
    },
    togglebutton:{
      width:'50%',
      height:30,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'yellow',
    }
  })