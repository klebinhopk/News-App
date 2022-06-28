import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default function Card(article){
    return (
            article.image_url ? (
            <View key={article.link} style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.figure}>
                        <Image style={{aspectRatio: 1, width: '100%'}} source={{uri: article.image_url}} />
                    </View>
                    <View style={styles.areaNewsContent}>
                        <View style={styles.areaNewsTitle}>
                            <Text>{article.title}</Text>
                        </View>

                        <View style={styles.areaNewsDescription}>
                            <Text>{article.description}</Text>
                        </View>

                        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Leia mais</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
           )
           : null
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderColor:'#ffffff',
        borderBottomWidth:2,
    },
    card: {
        flex:1,
        backgroundColor: '#fff',
        boxShadow: '0 0 0 #000',
        marginBottom: 10,
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    areaNewsContent: {
        padding: 10,
        flex: 1,
    },
    figure: {
        height: 300,
        flex:1,
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#efefef',
        flexGrow: 1,
        alignContent: 'center',
        justifyContent:'center'
    },
    areaNewsDescription: {
        marginBottom:10,
    },
    btn: {
        borderWidth: 1,
        borderColor:'#999',
        borderRadius: 50,
        width: 'auto',
        padding: 10,
        alignSelf: 'flex-start'
    },
    btnText: {
        color: '#888'
    }
});
