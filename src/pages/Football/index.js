import { StyleSheet, View, ScrollView } from 'react-native';

import Card from '../../components/Card';

export default function Football(){

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card term="sports"/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor:'#efefef',
        borderBottomWidth:2,
        flexDirection:'column'
    }
});