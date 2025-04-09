import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import colors from '../Themes/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  //   webClientId: '533183209257-ko3n4mv1sqfd4pimagh6t0f7v09otrm3.apps.googleusercontent.com',
  androidClientId:
    '533183209257-ko3n4mv1sqfd4pimagh6t0f7v09otrm3.apps.googleusercontent.com',
  //   iosClientId: '',
  scopes: ['profile', 'email'],
});

const Login = ({navigation, route}) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const GoogleLogin = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  };

  const handleGoogleLogin = async () => {
    // navigation.navigate('Home', {userInfo: "userData",LoggedIN:"Google Sign-in"});
    setLoading(true);
    try {
      const response = await GoogleLogin();
      console.log('user info--->', response.data.user);
      let userData = response.data.user;
      if (response.data.user.id != null) {
        setLoading(false);
        navigation.navigate('Home', {
          userInfo: userData,
          LoggedIN: 'Google Sign-in',
        });
      } else {
        setLoading(false);
        ToastAndroid.show('Try again after some time', ToastAndroid.CENTER);
      }
    } catch (apiError) {
      setError(
        apiError?.response?.data?.error?.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ActivityIndicator animating={loading} color={'blue'}></ActivityIndicator>
      <View style={{flex: 0.6, justifyContent: 'center'}}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#F7B174'}}>
          Begin Your Roshan 
        </Text>
        <Text style={{fontSize: 32, textAlign: 'center', color: '#F3A8CE'}}>
          Mindful Journey
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            marginLeft: 50,
            marginRight: 50,
            marginTop: 5,
            color:colors.borderthemeCOlor
          }}>
          Log in or sign up to begin your journey with personalized, human-like
          wellness support
        </Text>
      </View>

      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <LinearGradient
          colors={['#F7B174', '#F7B174', '#F7B174', '#F3A8CE']}
          start={{x: 0, y: 0}}
          style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
          <View style={{height: 300, width: '100%', justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleGoogleLogin()}
              style={{
                width: 200,
                borderRadius: 20,
                borderColor: colors.lightGrey,
                borderWidth: 1,
                alignSelf: 'center',
                flexDirection: 'row',
                padding: 7,
                width: '90%',
                justifyContent: 'center',
                backgroundColor: colors.white,
                height: 50,
              }}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  marginLeft: 10,
                  alignSelf: 'center',
                }}
                source={require('../Images/googles.png')}></Image>
              <Text style={{marginLeft: 7, textAlignVertical: 'center'}}>
                Continue with Google
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderRadius: 20,
                borderColor: colors.lightGrey,
                borderWidth: 1,
                alignSelf: 'center',
                flexDirection: 'row',
                padding: 7,
                width: '90%',
                justifyContent: 'center',
                backgroundColor: colors.white,
                marginTop: 10,
                height: 50,
              }}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  marginLeft: 10,
                  alignSelf: 'center',
                }}
                source={require('../Images/facebook.png')}></Image>
              <Text style={{marginLeft: 7, textAlignVertical: 'center'}}>
                Continue with Facebook
              </Text>
            </View>
            <View
              style={{
                borderRadius: 20,
                borderColor: colors.lightGrey,
                borderWidth: 1,
                alignSelf: 'center',
                flexDirection: 'row',
                padding: 7,
                width: '90%',
                justifyContent: 'center',
                backgroundColor: colors.white,
                marginTop: 10,
                height: 50,
              }}>
              <Image
                style={{
                  height: 24,
                  width: 24,
                  marginLeft: 10,
                  alignSelf: 'center',
                }}
                source={require('../Images/instagram.png')}></Image>
              <Text style={{marginLeft: 7, textAlignVertical: 'center'}}>
                Continue with Instagram
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFD700',
    alignSelf: 'center',
    marginLeft: 5,
  },
  imgStyle: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  vStyle: {
    flex: 1 / 2,
    height: 160,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
});
