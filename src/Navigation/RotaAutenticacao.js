import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../Screens/Profile/Profile';
import Home from '../Screens/Home/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const {Navigator , Screen} = createStackNavigator ();


   const HomeTabs = () =>{
    return(
        <Tab.Navigator initialRouteName='Home'
    tabBarOptions={{
		activeTintColor: '#fff',
        style:{backgroundColor: '#141414' , height:55, borderTopColor: '#141414', paddingBottom: 5,borderTopWidth:1}
		
	}}
        sceneContainerStyle={{backgroundColor: '#000'}}
       
       >
            <Tab.Screen name='Home'component={Home} options={{
                tabBarLabel: 'Início',
                tabBarIcon: () => (<Foundation name="home" size={24} color="white" />)
            }}/>
             <Tab.Screen name='Em breve'component={Home} options={{
                tabBarLabel: 'Em breve',
                tabBarIcon: () => (<MaterialCommunityIcons name="play-box-multiple-outline" size={24} color="white" />)
            }}/>
             <Tab.Screen name='Downloads'component={Home} options={{
                tabBarLabel: 'Downloads',
                tabBarIcon: () => (<MaterialCommunityIcons name="arrow-down-circle-outline" size={24} color="white" /> )
            }}/>
        </Tab.Navigator>
    )
   }





const RotaAutenticacao = () => {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: "transparent"
                }
            }}  >

            <Screen name='Profile' component={Profile} />
            {/* <Screen name='Home' component={HomeTabs} /> */}
           <Screen name='Home' component={HomeTabs} /> 

        </Navigator>
    )
}

export default RotaAutenticacao;