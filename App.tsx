import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'

function App(){
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>hello world</Text>
      <Text>hello world</Text>
      <Text>hello world</Text>
      <Text>hello world</Text>
    </View>
  </SafeAreaView>
  )

}


const styles=StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor:'white'
  }
})
export default App;