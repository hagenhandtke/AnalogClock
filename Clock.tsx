import React, {useEffect, useRef, useState} from "react"
import {StyleSheet, View, Dimensions, Animated} from "react-native";

const Clock = _ => {
    
    var hoursNode = useRef(null);
    var minutesNode = useRef(null);
    var secondsNode = useRef(null);

    const [timer,setTimer] = useState(null);
    const hoursOffset = Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 6 - 70;
    const minutesOffset = Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 6 - 30;
    const secondsOffset = Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 6 - 45;
    
    useEffect(() => {
        setTimer( 
            setInterval(() => {
            let date = new Date();
            let hours = (30 * ((date.getHours() % 12) + date.getMinutes() / 60)); // 30 degrees hour
            let min = (6 * date.getMinutes()); // 6 degrees every minute
            let sec = (6 * date.getSeconds()); // 6 degrees every
           
            if (hours) {
                hoursNode.current.setNativeProps({
                    style: {
                    transform: [{translateY: hoursOffset / 2 + 3}, { rotate: hours+"deg" }, {translateY: -hoursOffset / 2 + 3}]
                    }
                });
            }
            if (min) {
                minutesNode.current.setNativeProps({
                    style: {
                        transform: [{translateY: minutesOffset / 2 + 3}, { rotate: min+"deg" }, {translateY: -minutesOffset / 2 + 20}]
                    }
                });
            }
            if (sec) {
                secondsNode.current.setNativeProps({
                    style: {
                    transform: [{translateY: secondsOffset / 2 - 10}, { rotate: sec+"deg" }, {translateY: -secondsOffset / 2 + 30}]
                    }
                });
            }
        }, 1000));
            return () => clearInterval(timer);
        }, []);
    return (
      <View>
        <View style={clockStyles.clock}>
          <Animated.View ref={hoursNode} style={clockStyles.hours} />
          <Animated.View ref={minutesNode} style={clockStyles.minutes} />
          <Animated.View ref={secondsNode} style={clockStyles.seconds} />
          <Animated.View style={clockStyles.three} />
          <Animated.View style={clockStyles.six} />
          <Animated.View style={clockStyles.nine} />
          <Animated.View style={clockStyles.twelve} />
          <Animated.View style={clockStyles.center} />
        </View>
      </View>
    );
};

const dimentionSize = Math.round(Dimensions.get('window').width + Dimensions.get('window').height);
const yMiddleAndHeight = dimentionSize / 6;
console.log('seconds:', yMiddleAndHeight - 45);
const clockStyles = StyleSheet.create({
    clock: {
        height: dimentionSize / 3,
        width: dimentionSize / 3,
        backgroundColor: "#dddddd",
        borderRadius: yMiddleAndHeight,
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#aaaaaa",
        justifyContent: "center",
        alignItems: "center"
    },
    hours: {
        height: yMiddleAndHeight - 70,
        width: 6,
        backgroundColor: "#000",
        position: "absolute",
        bottom: yMiddleAndHeight,
    },
    minutes: {
        height: yMiddleAndHeight - 30,
        width: 2,
        backgroundColor: "#000",
        position: "absolute",
        bottom: yMiddleAndHeight
    },
    seconds: {
        height: yMiddleAndHeight - 45,
        width: 2,
        position: "absolute",
        bottom: yMiddleAndHeight,
        backgroundColor: "#ff4136",
    },
    three: {
        position: "absolute",
        width: 15,
        height: 3,
        backgroundColor: "#111111",
        right: 0,
    },
    six: {
        position: "absolute",
        width: 3,
        height: 15,
        backgroundColor: "#111111",
        bottom: 0,
    },
    nine: {
        position: "absolute",
        width: 15,
        height: 3,
        backgroundColor: "#111111",
        left: 0,
    },
    twelve: {
        position: "absolute",
        width: 3,
        height: 15,
        backgroundColor: "#111111",
        top: 0,
    },
    center: {
        width: 10,
        height: 10,
        margin: "auto",
        backgroundColor: "#000",
        borderRadius: 100 / 3
    }
});

export default Clock;