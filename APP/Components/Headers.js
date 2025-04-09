import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../Themes/Colors';
import LinearGradient from 'react-native-linear-gradient';

const Headers = ({title, onPress}) => {
  return (
    <LinearGradient
      colors={['#F7B174', '#F7B174','#F3A8CE']}>
      <View
        style={{
          height: 55,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Image
            style={{
              height: 25,
              width: 50,
              resizeMode: 'contain',
              tintColor: colors.black,
            }}
            source={require('../Images/back.png')}></Image>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            color: colors.black,
            alignSelf: 'center',
            marginLeft: 5,
          }}>
          {title}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Headers;
