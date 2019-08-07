import React from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Permissions from "expo-permissions";
import Clock from "./Clock";

const App = _ => {
    return (
        <View style={styles.container}>
            <Clock/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default App;
