import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import DashboardStackNavigator from './DashboardStackNavigator';
import UploadStackNavigator from './UploadStackNavigator';
import ProfileScreen from '../screens/Profile';
import colors from '../constants/Colors';
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
	return (
		<BottomTab.Navigator
			tabBarOptions={{
				activeTintColor: colors.tintColor,
				style: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
				keyboardHidesTabBar: true
			}}
			initialRouteName="Dashboard"
		>
			<BottomTab.Screen
				name="Dashboard"
				component={DashboardStackNavigator}
				options={{
					title: 'Dashboard',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
				}}
			/>
			<BottomTab.Screen
				name="Upload"
				component={UploadStackNavigator}
				options={{
					title: 'Your Uploads',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="upload" />
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					title: 'Profile',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />
				}}
			/>
		</BottomTab.Navigator>
	);
}
