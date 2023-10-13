import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from "react";

// While app is loading the splash screen will be displayed until 'hideAsync' is called
SplashScreen.preventAutoHideAsync

const Layout = () => {

    // Loading of custom fonts into the application
    const [fontsLoaded] = useFonts({
        PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        RubikRegular: require("../assets/fonts/Rubik-Regular.ttf"),
        RubikMedium: require("../assets/fonts/Rubik-Medium.ttf"),
        PlusJKSansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    })

    const onLayoutRootView = useCallback(async () =>{
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;