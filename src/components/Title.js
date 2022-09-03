import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        color: "#2D3047",
        fontFamily: "Roboto",
        fontWeight: 'bold',
        fontSize: 24,
        padding: 20,
        alignSelf: 'center'
      }
})