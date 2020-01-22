import { StyleSheet, PixelRatio, Platform, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
export const primaryColor = "rgb(165, 42, 42)";
export const NavigationOptionStyle = {
    headerStyle: {
        backgroundColor: primaryColor
    },
    headerTintCOlor: "rgb(245, 222, 179)"
};
export const SafeAreaViewSyle = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: primaryColor
    },
    androidSafeAreaWithNoHeaderStyle: {
        backgroundColor: "transparent"
    }
});
