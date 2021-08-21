import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Text,View,SafeAreaView,FlatList,StyleSheet,StatusBar,Image} from 'react-native';
import {Card} from 'react-native-elements';



const DATA = [
    {
        id:'1',
        title:'Pupusas',
        desc:'tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco',
        src: require('./src/img/pupusas.jpg'),
    },
    {
        id:'2',
        title:'Empanadas',
        desc: 'pastelitos a base de plátano maduro cocido que pueden ser rellenas de leche con maicena y canela o con frijoles molidos',
        src: require('./src/img/empandas.jpg'),
    },
    {
        id:'3',
        title:'Tamales',
        desc: 'preparado generalmente a base de masa de maíz o de arroz rellena de carnes, vegetales, salsas y otros ingredientes.',
        src: require('./src/img/tamales.jpg'),
    },
    {
        id:'4',
        title:'Atol',
        desc: 'una cocción dulce de maíz en agua, en proporciones tales que al final de la cocción tenga una moderada viscosidad y que se sirve lo más caliente posible.',
        src: require('./src/img/atol.jpg'),
    },  
];

const Item = ({ title, img, desc}) => (
    <View style={styles.item}>
        <Card style={styles.card}>  
            <Card.Image style={styles.img} source={img}>     
            </Card.Image>
            <Card.Title style={styles.title}>{title}</Card.Title> 
            <Card.Divider />
            <Text style={styles.desc}>{desc}</Text> 
        </Card>
    </View>   
);

const App = () => {
    const renderItem = ({item}) => (
        <Item title={item.title} img={item.src} desc={item.desc}/>
    );

    return(
        <SafeAreaView style = {styles.container}>
            <FlatList
                data = {DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight || 0,
    },
    item:{
        backgroundColor: '#4287f5',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    title:{
        fontSize: 32,
    },
    img:{
        width: 200,
        height: 125,
        borderWidth: 2,
        borderColor: '#000000',
        resizeMode: 'contain',
        margin: 8,
        alignContent:'center',
    },
    desc:{
        fontSize: 25,
    },
    card:{
        alignItems:'center',
        backgroundColor:'#a4c0ed',
        flex: 1,
        flexDirection: 'row',
    }
});

AppRegistry.registerComponent("comida_tipica", () => App); 
