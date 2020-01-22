import { StyleSheet, PixelRatio } from "react-native";
import { primaryColor } from "../GlobalStyle/GlobalStyle";
export const ViewStyleGender = StyleSheet.create({
    GenderView: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
export const GenderButton = StyleSheet.create({
    EachGenderButton: {
        backgroundColor: "#ffffff",
        flex: 1,
        elevation: 3,
        height: PixelRatio.getPixelSizeForLayoutSize(35),
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgb(238, 228, 228)"
    },
    ActiveGenderButton: {
        backgroundColor: primaryColor
    },
    GenderButtonWithLetfRadius: {
        borderTopLeftRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        borderBottomLeftRadius: PixelRatio.getPixelSizeForLayoutSize(10)
    },
    GenderButtonWithRightRadius: {
        borderTopRightRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        borderBottomRightRadius: PixelRatio.getPixelSizeForLayoutSize(10)
    }
});
