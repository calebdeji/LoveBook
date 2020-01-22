import { StyleSheet, PixelRatio, Dimensions } from "react-native";
import { primaryColor } from "../../components/GlobalStyle/GlobalStyle";
const { height, width } = Dimensions.get("screen");

export const ViewStyle = StyleSheet.create({
    OverAllView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    BoxView: {
        display: "flex",
        backgroundColor: "#ffff",
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        height: (55 * height) / 100,
        width: (80 * width) / 100,
        padding: PixelRatio.getPixelSizeForLayoutSize(10)
    },
    ViewComponent: {
        flex: 1,
        marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(10)
        // backgroundColor: primaryColor
    }
});
export const TextStyle = StyleSheet.create({
    TextHeader: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(35),
        color: "#ffffff"
    },
    BoxViewText: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(25),
        color: primaryColor,
        alignSelf: "center",
        width: "70%",
        textAlign: "center",
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(20)
    },
    BoxViewGeneralText: {
        fontWeight: "bold",
        fontSize: PixelRatio.getPixelSizeForLayoutSize(12),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(10)
    }
});
