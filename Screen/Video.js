// import React from "react";
// import {Text,View,StyleSheet} from "react-native";
// import Video from 'react-native-video';
// export default class Test extends React.Component {
//   state={
//     error: false
//   };
// render(){
// return(
// <View style={styles.container}>
//       <Video source={{uri: "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"}}   // Can be a URL or a localfile.
//        ref={(ref) => {
//          this.player = ref
//        }}                                      // Store reference
//        onBuffer={this.onBuffer}                // Callback when remote video is buffering
//        onEnd={this.onEnd}                      // Callback when playback finishes
//        onError={this.videoError}               // Callback when video cannot be loaded
//        style={styles.backgroundVideo}
//        resizeMode='cover' />
// </View>
// );
// }
// }
// const styles = StyleSheet.create({
//   container:{ flex: 1, justifyContent: "center"},
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });


import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

import Video from "react-native-video";
//import LightVideo from "./lights.mp4";

const THRESHOLD = 100;
export default class rnvideo extends Component {
  state = {
    paused: true,
  };
  position = {
    start: null,
    end: null,
  };
  handleVideoLayout = e => {
    const { height } = Dimensions.get("window");

    this.position.start = e.nativeEvent.layout.y - height - THRESHOLD;
    this.position.end = e.nativeEvent.layout.y + e.nativeEvent.layout.height + THRESHOLD;
  };

  handleScroll = e => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const paused = this.state.paused;
    const { start, end } = this.position;

    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ paused: false });
    } else if (
      (scrollPosition > end || scrollPosition < start) && !paused
    ) {
      this.setState({ paused: true });
    }
  };
  render() {
    const { width } = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll}>
          <View style={styles.fakeContent}>
            <Text>
              {this.state.paused ? "Paused" : "Playing"}
            </Text>
          </View>
          <Video
            repeat
            source={{uri: "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"}}
            paused={this.state.paused}
            onLayout={this.handleVideoLayout}
            style={{ width, height: 300 }}
          />
          <View style={styles.fakeContent}>
            <Text>
              {this.state.paused ? "Paused" : "Playing"}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fakeContent: {
    height: 850,
    backgroundColor: "#CCC",
    paddingTop: 250,
    alignItems: "center",
  },
});

AppRegistry.registerComponent("rnvideo", () => rnvideo);