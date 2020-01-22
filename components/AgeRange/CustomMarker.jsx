import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { primaryColor } from "../../components/GlobalStyle/GlobalStyle";
export class CustomSliderMarkerLeft extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const currentValue = this.props.currentValue;
        return (
            <View style={{ display: "flex", flexDirection: "column" }}>
                <View style={{ ...MarkerStyle.defaultMarkerStyle }}></View>
                <Text style={{ position: "absolute", bottom: -20 }}>
                    {" "}
                    {currentValue}{" "}
                </Text>
            </View>
        );
    }
}
export class CustomSliderMarkerRight extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const currentValue = this.props.currentValue;
        return (
            <View style={{ display: "flex", flexDirection: "column" }}>
                <View style={{ ...MarkerStyle.defaultMarkerStyle }}></View>
                <Text style={{ position: "absolute", bottom: -20 }}>
                    {" "}
                    {currentValue}{" "}
                </Text>
            </View>
        );
    }
}

const MarkerStyle = StyleSheet.create({
    defaultMarkerStyle: {
        borderRadius: 100,
        height: 20,
        width: 20,
        borderColor: primaryColor,
        borderWidth: 3,
        borderStyle: "solid",
        // marginLeft: 20,
        backgroundColor: "white"
    }
});
