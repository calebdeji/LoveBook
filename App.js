import React from "react";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    HomeScreenString,
    DateFoundScreenString
} from "./components/ScreenNames/ScreenNames";
import { NavigationOptionStyle } from "./components/GlobalStyle/GlobalStyle";
import Home from "./Screens/Home/Home";

const persistenceKey = "persistenceKey";
const persistNavigationState = async navState => {
    try {
        const navStateString = JSON.stringify(navState);
        await AsyncStorage.setItem("persistenceKey", navStateString);
    } catch (err) {
        console.log("Error while setting item ", err);
    }
};
const loadNavigationState = async () => {
    const navStateRetrieved = await AsyncStorage.getItem(persistenceKey);
    return JSON.parse(navStateRetrieved);
};

const stackNavigator = createStackNavigator(
    {
        [HomeScreenString]: {
            screen: Home,
            navigationOptions: {
                headerShown: false
            }
        }
    },
    {
        defaultNavigationOptions: {
            ...NavigationOptionStyle
        }
    }
);

const AppContainer = createAppContainer(stackNavigator);

const App = () => {
    return (
        <AppContainer
            persistNavigationState={persistNavigationState}
            loadNavigationState={loadNavigationState}
            renderLoadingExperimental={() => <ActivityIndicator />}
        />
    );
};

export default App;
