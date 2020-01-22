import React, { Component } from "react";
import { View, Text, Slider, Dimensions } from "react-native";
import { TextStyle, ViewStyle } from "../../Screens/Home/HomeStyle";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { primaryColor } from "../../components/GlobalStyle/GlobalStyle";

const { height, width } = Dimensions.get("screen");
import {
    CustomSliderMarkerLeft,
    CustomSliderMarkerRight
} from "./CustomMarker";
export default class AgeRange extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { ageRange: [19, 29], sliderValue: 20, min: 10, max: 100 };
    }
    handleSliderValueChange = newValue => {
        this.setState({ ageRange: newValue });
        console.log("values is ", newValue);
    };
    render() {
        return (
            <View style={ViewStyle.ViewComponent}>
                <Text style={TextStyle.BoxViewGeneralText}> Age Range</Text>
                <View>
                    <MultiSlider
                        trackStyle={{
                            backgroundColor: "rgb(238, 137, 137)"
                        }}
                        selectedStyle={{
                            backgroundColor: primaryColor
                        }}
                        values={this.state.ageRange}
                        min={18}
                        max={40}
                        step={1}
                        valuePrefix='Age '
                        enabledOne={true}
                        enabledTwo={true}
                        isMarkersSeparated={true}
                        snapped={true}
                        allowOverlap={false}
                        onValuesChange={values => {
                            this.handleSliderValueChange(values);
                        }}
                        sliderLength={(75 * width) / 100}
                        customMarkerLeft={e => {
                            return (
                                <CustomSliderMarkerLeft
                                    currentValue={e.currentValue}
                                />
                            );
                        }}
                        customMarkerRight={e => {
                            return (
                                <CustomSliderMarkerRight
                                    currentValue={e.currentValue}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}
