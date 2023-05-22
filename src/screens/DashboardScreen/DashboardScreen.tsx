import React from 'react'
import { StatusBar , Text, View } from 'react-native'

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text>DashboardScreen</Text>
    </View>
  )
}

export default DashboardScreen