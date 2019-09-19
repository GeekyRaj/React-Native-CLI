import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
import ReactRef from './Screen/ReactRef';
import useReducer from './Screen/useReducer';
import VideoDemo from './Screen/Video';
import Player from './Screen/Player';
const AppStack = createStackNavigator({
    one:{
        screen:FirstScreen
    },
    two:{
        screen:SecondScreen
    },
    third:{
        screen:ThirdScreen
    },
    Ref:{
        screen:ReactRef
    },
    UseReducer:{
        screen: useReducer
    },
    VideoDemo:{
        screen: VideoDemo
    },
    Player:{
        screen: Player
    }
})

export default createAppContainer(AppStack);


