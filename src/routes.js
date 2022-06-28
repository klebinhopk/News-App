import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Football from './pages/Football';
import Fire from './pages/Fire';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen
                name="Home"
                component={Home}
                
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Football"
                component={Football}
                
                options={{
                    tabBarLabel: 'Sports',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="football" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Fire"
                component={Fire}
                
                options={{
                    tabBarLabel: 'Fire',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="fire" color={color} size={26} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}