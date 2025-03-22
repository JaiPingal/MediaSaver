import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MediaScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text_style}>MediaScreen</Text>
    </View>
  )
}

export default MediaScreen

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