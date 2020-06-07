//Harshil Choudhary
//harshilchoudharyids@gmail.com

import React, {Component} from 'react';
import {
    FlatList, StyleSheet, 
    Text, View, Image, ImageBackground, 
    Alert, Platform, TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {todays_Medication_Data} from "./todays_Medication_Data.js";

class HorizontalFlatListItem extends Component{
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width:100,
                    borderRadius:10,
                    borderWidth:1,
                    BorderColor: 'grey',
                    margin:4,
                }}> 
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:20,
                }}>{this.props.item.time}
                </Text>

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:20,
                }}>{this.props.item.days}
                </Text>      

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:20,
                }}>{this.props.item.name}
                </Text>      
                   
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:20,
                }}>{this.props.item.qty}
                </Text> 

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:20,
                }}>{this.props.item.fills}
                </Text>       
                         
            </View>
        )
    }
}





export default class HorizontalFlatList extends Component {
    render(){
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: '40%',
                }}>

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:10,
                }}>Today's Medication
                </Text>       

                <View style={{height: 250}}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.25,
                        }}
                        horizontal={true}

                        data={todays_Medication_Data}    

                        renderItem={({item, index}) => {
                            return(
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                </HorizontalFlatListItem>);
                        }}
                        keyExtractor={(item, index) => item.hour}
                    >
                    </FlatList>
                </View>  
                
            </View>
        );
    }
}