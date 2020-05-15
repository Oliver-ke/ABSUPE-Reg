import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

// screens
import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';

const DashboardStackNavigator = () => {
	return (
		<AuthStack.Navigator initialRouteName="Splash">
			<AuthStack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
			<AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
		</AuthStack.Navigator>
	);
};
export default DashboardStackNavigator;
