import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando a biblioteca de ícones
import Home from '../screens/home';
import Chat from '../screens/chat';
import Categorias from '../screens/categorias';
import Moments from '../screens/moments';

const Tab = createBottomTabNavigator();

export default function Bottomnav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categorias}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="th" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="comments" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Moments"
        component={Moments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="refresh" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}