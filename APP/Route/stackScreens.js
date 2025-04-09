import React  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen";
import Login from "../Screens/Login";
import Home from "../Screens/Home";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Home" component={Home}/>

  </Stack.Navigator>
  ) 
}

export { MainStackNavigator };