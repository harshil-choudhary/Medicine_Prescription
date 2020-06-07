
import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import { createBottomTabNavigator, createAppContainer, FlatList} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/FontAwesome';  
import HorizontalFlatList from './HorizontalFlatList';

class TodayScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Today Screen</Text>  
        </View>  
    );  
  }  
}  

class MedicationScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Medication Screen</Text>  
        </View>  
    );  
  }  
}  

class AppointmentsScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Appointments Screen</Text>  
            </View>  
        );  
    }  
}  

class ChatScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Live Chat Screen</Text>  
            </View>  
        );  
    }  
}  

class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Profile Screen</Text>  
            </View>  
        );  
    }  
}  

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  

const TabNavigator = createMaterialBottomTabNavigator( 
    {  
        Home: { screen: HorizontalFlatList,  
            navigationOptions:{  
                tabBarLabel:'Today',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: '#12a064'}]} size={20} name={"home"}/>  
                    </View>),  
                activeColor: '#12a064',  
                inactiveColor: '#000000',  
                barStyle: { backgroundColor: '#ffffff' }, 
            }  
        },  
        Medication: { screen: MedicationScreen,  
            navigationOptions:{  
                tabBarLabel:'Medication',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={20} name={"heart"}/>  
                    </View>),  
                activeColor: '#12a064',  
                inactiveColor: '#000000',  
                barStyle: { backgroundColor: '#ffffff' },  
            }  
        },  
        Appointments: { screen: AppointmentsScreen,  
            navigationOptions:{  
                tabBarLabel:'Appointments',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={20} name={"calendar"}/>  
                    </View>),  
                activeColor: '#12a064',  
                inactiveColor: '#000000',  
                barStyle: { backgroundColor: '#ffffff' },  
            }  
        },  
        Live_Chat: {  
            screen: ChatScreen,  
            navigationOptions:{  
                tabBarLabel:'Live Chat',  
                tabBarOptions: 'showLabel',
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={20} name={"commenting-o"}/>  
                    </View>), 
                activeColor: '#12a064',  
                inactiveColor: '#000000',   
                barStyle: { backgroundColor: '#ffffff' },  
            }  
        },  
        Profile: {  
            screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={20} name={"user"}/>  
                    </View>), 
                activeColor: '#12a064',  
                inactiveColor: '#000000',  
                barStyle: { backgroundColor: '#ffffff' },      
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  



  
export default createAppContainer(TabNavigator);  
