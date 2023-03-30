import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassword from '../screens/ForgotPassword';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ActivityScreen from '../screens/ActivityScreen';
import SavedScreen from '../screens/SavedScreen';
import colors from '../helper/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomStack = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: colors.secondary,
				tabBarInactiveTintColor: colors.white,
				tabBarStyle: {
					backgroundColor: colors.primary,
				},
				tabBarLabelStyle: {
					fontSize: 14,
					fontWeight: 'bold',
				},
				tabBarIcon: ({ focused, color, size }) => {
					let icon;
					if (route.name === 'Home') {
						icon = require('../assets/images/ic_home.png');
					} else if (route.name === 'Activity') {
						icon = require('../assets/images/ic_activity.png');
					} else if (route.name === 'Saved') {
						icon = require('../assets/images/ic_fav_filled.png');
					} else if (route.name === 'Profile') {
						icon = require('../assets/images/ic_profile.png');
					}
					return <Image
						source={icon}
						style={{ width: 20, height: 20, 
							tintColor: focused ? colors.secondary : colors.white 
						}}
					/>;
				},
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Activity" component={ActivityScreen} />
			<Tab.Screen name="Saved" component={SavedScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
				<Stack.Screen name="BottomStack" component={BottomStack} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;