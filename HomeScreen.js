//Harshil Choudhary
//harshilchoudharyids@gmail.com

import React, {Component} from 'react';
import {
    FlatList, StyleSheet, 
    Text, View, Button, Alert, Image
} from 'react-native';
import {Medication_Data} from "./Medication_Data.js";

var today = new Date();                             //for date
var date=today.getDate() + "/"+ parseInt(today.getMonth()+1);
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var short_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const Doc_Image = () => (                       //doctor image
    <Image 
        style={{
            marginTop:13,
            marginLeft:20,
            resizeMode: 'contain',
            height:50,
            width:50
        }}
        source = {require('./images/doc.png')}/>
)

const Pills_Image = () => (                     //pills image
    <Image  
        style={{
            marginLeft:10,
            resizeMode: 'contain',
            height:40,
            width:40
        }}
        source = {require('./images/pills.png')}/>
)

const buttonPressAlert = () =>                  //alert for the "mark as taken" button
        Alert.alert(
            'Mark as Taken',
            'Have you taken this medicine today?',
            [
                {
                  text: 'No',
                  onPress: () => console.log('No Pressed'),
                  style: 'cancel'
                },
                { text: 'Yes', onPress: () => console.log('Yes Pressed') }
              ],
              { cancelable: false }
        ); 

class MedicationFlatListItem extends Component{     //horizontal flatlist
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    width:250,
                    borderRadius:10,
                    borderWidth:0,
                    margin:10,
                    shadowRadius:50,
                    backgroundColor: 'white',
    

                }}> 
                <View
                       style={{
                        alignItems: 'center',   
                        width:250,
                        borderRadius:10,
                        borderWidth:0,
                        backgroundColor: '#ffa285',
                        margin:0,
            
        
                    }}> 
                    <Text style={{
                        fontSize:32,
                        fontWeight:'bold',
                        color:'white',
                        margin:0,
                        
                    }}>{this.props.item.time}
                    </Text>

                    <Text style={{
                        fontSize:16,
                        fontWeight:'bold',
                        color:'white',
                        margin:0,
                        marginBottom:5,
                    }}>{this.props.item.days}
                    </Text> 
                </View>
       
                <View style={{flexDirection: 'row'}}>
                    <Pills_Image/>
                    <Text style={{
                        alignSelf:'center',
                        marginLeft:30,
                        fontSize:20,
                        fontWeight:'bold',
                        color:'black',
                        margin:0,
                    }}>{this.props.item.name}
                    </Text>      
                </View>   
                <Text style={{
                    fontSize:16,
                    marginLeft:40,
                    fontWeight:'bold',
                    color:'grey',
                    margin:0,
                }}>Qty                      Fills
                </Text> 

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    marginLeft:40,
                    color:'black',
                    margin:0,
                    marginBottom:10
                }}>{this.props.item.qty}           {this.props.item.fills}
                </Text>   
                <Button  
                    onPress={buttonPressAlert}
                    title = "Mark as Taken"
                    color = '#12a064'
        
                 ></Button>        
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
                    }}> 
                    <Text style={{
                        fontSize:32,
                        fontWeight:'bold',
                        color:'white',
                        margin:0,
                        marginTop:75,
                        marginLeft:20,

                    }}>Good Morning!
                    </Text>

                    <Text style={{
                        fontSize:16,
                        fontWeight:'bold',
                        color:'white',
                        margin:0,
                        marginBottom:5,
                        marginLeft:24,
                    }}>{weekday[today.getDay()]}, {months[today.getMonth()]} {today.getDate()}
                    </Text> 
                </View>

                
                <Text style={{
                    fontSize:24,
                    fontWeight:'bold',
                    color:'black',
                    margin:10,
                }}>Today's Medication</Text> 

                <View style={StyleSheet.container}>                 
                    <FlatList                           //for flatlist
                        horizontal = {true}
                        showsHorizontalScrollIndicator={false}
                        data={Medication_Data}
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                        renderItem = {({item}) => 
                            <MedicationFlatListItem item={item} parentFlatList={this}/>
        
                        }
                    />
                </View>

                <Text style={{
                    fontSize:24,
                    fontWeight:'bold',
                    color:'black',
                    margin:10,
                }}>Today's Appointment</Text> 

                <View style={{
                    flexDirection: 'column',
                    height:75,  
                    borderWidth:0,
                    backgroundColor: 'white',
                    margin:5,
                    marginLeft:55,
                    width:300,
                    borderRadius:10,
                }}>
                    <View style={{ 
                            flexDirection: 'row'
                        }}> 
                            <Text style={{
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#12a064',
                                marginTop:25,
                                marginLeft:20,
                            }}>{short_months[today.getMonth()]} {today.getDate()}</Text> 

                            <Text style={{
                                fontSize:20,
                                fontWeight:'bold',
                                color:'black',
                                marginTop:22,
                                marginLeft:20,
                            }}>Dr. Goldstein</Text>  
                            
                            <Doc_Image/>
                    </View>  

                    
                </View>
            </View>
            
        )
    }
}
