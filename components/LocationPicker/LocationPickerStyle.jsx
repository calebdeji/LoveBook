import { StyleSheet, PixelRatio } from "react-native";
import { primaryColor } from "../GlobalStyle/GlobalStyle";
export const PickerView = StyleSheet.create({
    ViewContainer: {
        borderStyle: "solid",
        borderColor: "transparent",
        borderBottomColor: primaryColor,
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        borderBottomWidth: PixelRatio.getPixelSizeForLayoutSize(2),
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(35)
    }
});
