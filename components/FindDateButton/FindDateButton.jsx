import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { ViewStyle, TextStyle } from "./DateButtonStyle";

export default class FindDateButon extends Component {
    render() {
        return (
            <View style={ViewStyle.OverallView}>
                <TouchableHighlight style={ViewStyle.Button}>
                    <Text style={TextStyle.buttonText}> Find a date</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
