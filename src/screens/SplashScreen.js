import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text style={styles.text_style}>Media Saver</Text>
      <Button onPress={() => navigation.navigate('Tabs')}>Go to Home</Button>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_style: {
    fontSize: 25,
    color: '#000',
  },
});
