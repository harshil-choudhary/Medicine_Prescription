//Harshil Choudhary
//harshilchoudharyids@gmail.com

import React, {Component} from 'react';
import {
    FlatList, 
    Text, View, Image
} from 'react-native';
import {Medication_Data} from "./Medication_Data.js";

const Pills_Image = () => (
    <Image 
        style={{
            marginLeft:10,
            resizeMode: 'contain',
            height:40,
            width:40,
            margin:20,
            marginLeft:60,
        }}
        source = {require('./images/pills.png')}/>
)

class MedicationFlatListItem extends Component{
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    height:200,
                    borderWidth:1,
                    borderColor:'#dfdfdf',          
                    margin:0,
                }}>      

                <View style={{flexDirection: 'row'}}>
                    <Pills_Image/>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:'black',
                        margin:20,
                        marginLeft:40,
                    }}>{this.props.item.name}
                    </Text> 
                </View>     
                   
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    marginLeft:60,
                }}>Directions: {this.props.item.directions}
                </Text> 

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'grey',
                    margin:0,
                    marginTop:20,
                    marginLeft:60
                }}>Qty                  Fills                   RX
                </Text>  

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    color:'black',
                    margin:0,
                    marginLeft:60
                }}>{this.props.item.qty}       {this.props.item.fills}               {this.props.item.RX}
                </Text>            
                         
            </View>
        )
    }
}


export default class medication_FlatList extends Component {
    render() {
        return (
            <View>
          
                <View style={{  
                        height:175,
                        borderWidth:0,
                        backgroundColor: '#12a064',
                        margin:0,
                        shadowRadius:50
        
                    }}> 
                    <Text style={{
                        fontSize:32,
                        fontWeight:'bold',
                        color:'white',
                        margin:0,
                        marginTop:75,
                        marginLeft:20,

                    }}>Medication
                    </Text>

                    <Text style={{
                        fontSize:16,
                        fontWeight:'bold',
                        color:'white',
                        margin:0,
                        marginBottom:5,
                        marginLeft:20,
                    }}>Current prescribed medication
                    </Text> 
                </View>

            
                <View style={{
                    height:400,
                }}>      
                    <FlatList                   //vertical FLatList
                        data={Medication_Data}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        renderItem = {({item}) => 
                            <MedicationFlatListItem item={item} parentFlatList={this}/>
        
                        }
                    />
                </View>
            </View>
        )
    }
}
