import {Image, ScrollView, View, Text, StyleSheet} from 'react-native'
import React from 'react'

function Gatito (props){
    return (
        <View>
            <Image style={styles.gato} source = {props.imagen}></Image>
            <Text styles={styles.titulo}> {props.nombre}</Text>
        </View>
    )
}

export default Gatito;

const styles = StyleSheet.create({
    gato:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,
    },
    titulo:{
        fontSize:14,
        fontWeight:'Comfortaa',
        color:'blue',
    }
});