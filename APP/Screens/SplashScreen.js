
import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  View,
} from 'react-native';


const SplashScreen = ({navigation }) => {

  useEffect(() => {
    setTimeout(() => {
            navigation.navigate("Login");
    }, 3000);
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#36454F', justifyContent: "center" }}>
        <Image source={require("../Images/pixquote.png")}
          style={{ height: 200, width: 200, resizeMode: "contain", alignSelf: "center", borderRadius: 30 }}></Image>
      </View>
    </SafeAreaView>
  )
}


export default SplashScreen;
