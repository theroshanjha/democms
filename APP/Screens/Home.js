import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import Headers from '../Components/Headers';
import colors from '../Themes/Colors';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Home = ({navigation, route}) => {
  const userInfo = route.params.userInfo;
  const LoggedIN = route.params.LoggedIN;
  console.log('user info data is -->', userInfo);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Social Media', userInfo.givenName + ' , Do you really want to Signout?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => doSignOut()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const doSignOut = () => {
    Alert.alert(
      'Social Media',
      userInfo.givenName + ' , Do you really want to Signout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => signOutNow()},
      ],
    );
  };

  const signOutNow = async () => {
    try {
      await GoogleSignin.signOut();
      ToastAndroid.showWithGravity(
        'Signing Off',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      console.log('logged out!');
      navigation.replace('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Headers title={'User Profile'} onPress={() => doSignOut()}></Headers>
      <Text style={{fontSize: 20, letterSpacing: 1, padding: 10}}>
        {'LoggedIn via - ' + LoggedIN}
      </Text>
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          padding: 10,
        }}>
        {userInfo.photo == null && (
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={require('../Images/googles.png')}></Image>
        )}
        {userInfo.photo != null && (
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={{uri: userInfo.photo}}></Image>
        )}
        <View
          style={{
            backgroundColor: colors.golden,
            marginTop: 10,
            padding: 10,
          }}>
          <Text> ID : {userInfo.id}</Text>
          <Text> Name : {userInfo.name}</Text>
          <Text> Email : {userInfo.email}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => doSignOut()}>
          <Text
            style={{
              marginLeft: 1,
              marginTop: 7,
              textDecorationLine: 'underline',
              fontStyle: 'italic',
              fontSize: 16,
            }}>
            Sign Out?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Home;
