import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function CardNews(){
 
    return (
        <View style={styles.container}>
            <Text>Want to see hot content?</Text>

            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Click Here</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginTop: 30,
        backgroundColor:'blue',
        padding: 10
    },
    btnText: {
        color: '#ffffff',
    }
});
