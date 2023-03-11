import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Entypo} from '@expo/vector-icons'

export default function ButtonNew({focused, size}:any){
    return(
        <View style={styles.container}>
            <Entypo name='plus' color={focused ? '#fff' : '#f8f8f8'} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0E0725',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        color: '#fff',
    }
})