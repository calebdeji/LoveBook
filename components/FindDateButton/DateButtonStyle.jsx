import { StyleSheet, PixelRatio } from "react-native";
import { primaryColor } from "../GlobalStyle/GlobalStyle";
export const ViewStyle = StyleSheet.create({
    OverallView: {
        flex: 3,
        justifyContent: "center"
    },
    Button: {
        backgroundColor: primaryColor,
        width: PixelRatio.getPixelSizeForLayoutSize(130),
        alignSelf: "center",
        alignItems: "center",
        padding: PixelRatio.getPixelSizeForLayoutSize(10),
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        elevation: 5
    }
});
export const TextStyle = StyleSheet.create({
    buttonText: {
        color: "#ffffff"
    }
});
