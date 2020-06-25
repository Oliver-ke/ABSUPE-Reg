import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const DashboardStack = createStackNavigator();

// screens
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

const DashboardStackNavigator = () => {
	return (
		<DashboardStack.Navigator initialRouteName="Home">
			<DashboardStack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
			<DashboardStack.Screen options={{ headerShown: false }} name="Detail" component={DetailScreen} />
		</DashboardStack.Navigator>
	);
};
export default DashboardStackNavigator;
