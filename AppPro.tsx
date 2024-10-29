import React from "react";
import {

    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme

} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode=useColorScheme()==='dark'
    
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText }>Hello World!</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '',
        // width:'100%',
        flex:1,
        // justifyContent: 'center',
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color: 'white'
    },
    darkText:{
        color:'black'
    }
})
export default AppPro