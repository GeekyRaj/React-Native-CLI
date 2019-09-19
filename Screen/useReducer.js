import React, { useReducer } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const initialState = {
    count1: 0,
    count2: 0,
  };
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return {...state, count1: state.count1 + 1};
    case 'decrement': return {...state, count1: state.count1 - 1};
    case 'reset': return { ...state, count1: 0 };

    case 'increment1': return {...state, count2: state.count2 + 1};
    case 'decrement1': return {...state, count2: state.count2 - 1};
    case 'reset1': return { ...state, count2: 0 };
    default: throw new Error('Unexpected action');
  }
};

const Example01 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={Styles.Container}>
      <Text style={Styles.text}>{state.count1}</Text>
      <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => dispatch('increment')} style={Styles.button}>
                <Text style={Styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch('decrement')} style={Styles.button}>
                <Text style={Styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch('reset')} style={Styles.button}>
                <Text style={Styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>

        <Text style={Styles.text}>{state.count2}</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => dispatch('increment1')} style={Styles.button}>
                <Text style={Styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch('decrement1')} style={Styles.button}>
                <Text style={Styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch('reset1')} style={Styles.button}>
                <Text style={Styles.text}>Reset</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

export default Example01;
const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'gray'
    },
    text: {
        fontSize: 20,
    },
    button: {
        width: 60,
        height: 30,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})