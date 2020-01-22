import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { ViewStyleGender, GenderButton } from "./GenderStyle";
import { TextStyle, ViewStyle } from "../../Screens/Home/HomeStyle";

export default class Gender extends Component {
    constructor(props) {
        super(props);
        this.state = { genderPicked: "Female" };
    }
    handleGenderPress = genderPicked => {
        this.setState({ genderPicked });
    };
    render() {
        return (
            <View style={ViewStyle.ViewComponent}>
                <Text style={TextStyle.BoxViewGeneralText}> Gender : </Text>
                <View style={ViewStyleGender.GenderView}>
                    <TouchableHighlight
                        onPress={() => {
                            this.handleGenderPress("Female");
                        }}
                        style={
                            this.state.genderPicked === "Female"
                                ? {
                                      ...GenderButton.EachGenderButton,
                                      ...GenderButton.GenderButtonWithLetfRadius,
                                      ...GenderButton.ActiveGenderButton
                                  }
                                : {
                                      ...GenderButton.EachGenderButton,
                                      ...GenderButton.GenderButtonWithLetfRadius
                                  }
                        }
                    >
                        <Text
                            style={
                                this.state.genderPicked === "Female"
                                    ? { color: "white" }
                                    : { color: "black" }
                            }
                        >
                            Female
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.handleGenderPress("Male");
                        }}
                        style={
                            this.state.genderPicked === "Male"
                                ? {
                                      ...GenderButton.EachGenderButton,
                                      ...GenderButton.ActiveGenderButton
                                  }
                                : {
                                      ...GenderButton.EachGenderButton
                                  }
                        }
                    >
                        <Text
                            style={
                                this.state.genderPicked === "Male"
                                    ? { color: "white" }
                                    : { color: "black" }
                            }
                        >
                            Male
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.handleGenderPress("Others");
                        }}
                        style={
                            this.state.genderPicked === "Others"
                                ? {
                                      ...GenderButton.EachGenderButton,

                                      ...GenderButton.GenderButtonWithRightRadius,
                                      ...GenderButton.ActiveGenderButton
                                  }
                                : {
                                      ...GenderButton.EachGenderButton,
                                      ...GenderButton.GenderButtonWithRightRadius
                                  }
                        }
                    >
                        <Text
                            style={
                                this.state.genderPicked === "Others"
                                    ? { color: "white" }
                                    : { color: "black" }
                            }
                        >
                            {" "}
                            Others{" "}
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
