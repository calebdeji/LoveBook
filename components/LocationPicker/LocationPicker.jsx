import React, { Component } from "react";
import { Picker, View, Text } from "react-native";
import { Locations } from "./Locations";
import { PickerView } from "./LocationPickerStyle";
import { TextStyle, ViewStyle } from "../../Screens/Home/HomeStyle";

export default class LocationPicker extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            pickerValue: ""
        };
    }
    handlePickerValueChange = (pickerValue, pickerIndex) => {
        this.setState({ pickerValue });
    };
    render() {
        return (
            <View style={ViewStyle.ViewComponent}>
                <Text
                    style={{ ...TextStyle.BoxViewGeneralText, marginBottom: 0 }}
                >
                    {" "}
                    Location{" "}
                </Text>
                <View style={PickerView.ViewContainer}>
                    <Picker
                        mode='dropdown'
                        onValueChange={(pickerValue, pickerIndex) => {
                            this.handlePickerValueChange(
                                pickerValue,
                                pickerIndex
                            );
                        }}
                        selectedValue={this.state.pickerValue}
                    >
                        {Locations.map((eachLocation, index) => {
                            return (
                                <Picker.Item
                                    key={index}
                                    label={eachLocation.location}
                                    value={eachLocation.location}
                                    disabled={eachLocation.disabled}
                                />
                            );
                        })}
                    </Picker>
                </View>
            </View>
        );
    }
}
