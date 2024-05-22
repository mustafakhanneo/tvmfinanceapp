import { Stack } from "expo-router"
import * as NavigationBar from 'expo-navigation-bar';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
    const [fontsLoaded, fontError] = useFonts({
        
        'Tanker': require('../assets/fonts/Tanker-Regular.ttf'),
        'Pilcrow': require('../assets/fonts/PilcrowRounded-Heavy.ttf'),
        'Archivo': require('../assets/fonts/Archivo-Regular.ttf'),
      });
    
      useEffect(() => {
        onLayoutRootView()
      })
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    
    NavigationBar.setBackgroundColorAsync("black");
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown:false}} />
            <Stack.Screen name="(tabs)" options={{ headerShown:false}} />
        </Stack>
    )
}

export default RootLayout
