import { Stack } from "expo-router"
import * as NavigationBar from 'expo-navigation-bar';


const RootLayout = () => {
    
    NavigationBar.setBackgroundColorAsync("black");
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown:false}} />
            <Stack.Screen name="(tabs)" options={{ headerShown:false}} />
        </Stack>
    )
}

export default RootLayout
