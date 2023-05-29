import React from 'react'
import { StatusBar , Text, View } from 'react-native'
import ExpenseList from '../../components/ExpenseList/ExpenseList'

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ExpenseList />
    </View>
  )
}

export default DashboardScreen