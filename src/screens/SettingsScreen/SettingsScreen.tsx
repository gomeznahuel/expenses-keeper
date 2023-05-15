import React from 'react'
import { Text, View } from 'react-native'
import { MainStackRouteProp } from "../../types/navigate.types";
import { useRoute } from '@react-navigation/native';
import styles from './styles'

const SettingsScreen = () => {
  const route = useRoute<MainStackRouteProp >();

  return (
    <View>
      <Text style={styles.container}>
        {route.params?.userId}
      </Text>
    </View>
  )
}

export default SettingsScreen