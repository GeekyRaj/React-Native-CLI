import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class ReactRef extends Component {
    constructor(props) {
        super(props);
        //this.toggleInputCase = this.toggleInputCase.bind(this);
        this.state = { uppercase: false };
    }

    toggleInputCase=() =>{
        this.inputField.focus()
        console.log(this.state.uppercase)
        const isUpper = this.state.uppercase;
        // Accessing the ref using this.inputField
        const value = this.inputField;
        console.log(this.inputField)
        
         this.inputField.value =
          isUpper
            ? value.toLowerCase()
            : value.toUpperCase();
            
        this.setState({ uppercase: !isUpper });
      }

    render() {
        return (
            <View style={Styles.Container}>
                
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, fontSize: 20 }}
                    ///onChangeText={text => onChangeText(text)}
                    //value={'Enter Text'}
                    ref={elem => this.inputField = elem}
                />
                <TouchableOpacity style={Styles.button} onPress={this.toggleInputCase}>
                    <Text style={Styles.text}>Toggle Case</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
    },
    button: {
        width: '50%',
        height: 30,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    }
})
