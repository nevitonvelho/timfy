import {View, StatusBar } from 'react-native';
import Home from './src/pages/Home';
import Calendar from './src/pages/Calendar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Entypo, Feather, SimpleLineIcons } from '@expo/vector-icons'
import New from './src/pages/New';
import ButtonNew from './src/components/ButtonNes';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    
 
      <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" translucent={false}/>
        <Tab.Navigator 
          
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#BC00DD',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopColor: 'transparent',
            },
          })}
        >
            <Tab.Screen name="Inicio" component={Home} options={{ headerShown: false, tabBarIcon:({size, color}) => (
              <Entypo name="home" size={size} color={color}/>
            )}}/>

      

            <Tab.Screen name="New" component={New} options={{headerShown: false,tabBarLabel:'', tabBarIcon:({size, color}) => (
              <ButtonNew size={size} color={color}/>
            )}}/>


            <Tab.Screen name="Calendario" component={Calendar} options={{headerShown: false, tabBarIcon:({size, color}) => (
              <Feather  name="calendar" size={size} color={color}/>
            )}}/>
        </Tab.Navigator>
        </NavigationContainer>
   
  );
}

