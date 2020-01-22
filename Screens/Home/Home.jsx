import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableHighlight } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaViewSyle } from "../../components/GlobalStyle/GlobalStyle";
import { ViewStyle, TextStyle, GenderButton } from "./HomeStyle";
import Gender from "../../components/Gender/Gender";
import AgeRange from "../../components/AgeRange/AgeRange";
import LocationPicker from "../../components/LocationPicker/LocationPicker";
import FindDateButton from "../../components/FindDateButton/FindDateButton";
import * as Font from "expo-font";
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { AdreenaFontFamily: "" };
    }
    componentDidMount() {
        Font.loadAsync({
            "AdreenaScript-Demo": require("../../assets/fonts/AdreenaScript-Demo.ttf")
        }).then(() => {
            this.setState({ AdreenaFontFamily: "AdreenaScript-Demo" });
        });
    }

    render() {
        const AdreenaFontFamilyWordLength = this.state.AdreenaFontFamily.trim();
        return (
            <SafeAreaView
                style={SafeAreaViewSyle.androidSafeAreaWithNoHeaderStyle}
            >
                <ImageBackground
                    source={require("../../assets/images/backgroundImage.jpg")}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <View style={ViewStyle.OverAllView}>
                        <View>
                            <Text
                                style={
                                    AdreenaFontFamilyWordLength.length !== 0
                                        ? {
                                              ...TextStyle.TextHeader,
                                              fontFamily: "AdreenaScript-Demo"
                                          }
                                        : { ...TextStyle.TextHeader }
                                }
                            >
                                {" "}
                                LoveBook
                            </Text>
                        </View>
                        <View style={ViewStyle.BoxView}>
                            <View style={{ flex: 1 }}>
                                <Text style={TextStyle.BoxViewText}>
                                    Let's help you find true love
                                </Text>
                            </View>
                            <Gender />
                            <AgeRange />
                            <LocationPicker />
                            <FindDateButton />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
