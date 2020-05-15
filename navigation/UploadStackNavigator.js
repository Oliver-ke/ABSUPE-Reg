import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const UploadStack = createStackNavigator();

// screens
// TODO: add the "add the screen for users to add students"
import UploadScreen from '../screens/Upload';
import DetailScreen from '../screens/Detail';

const DashboardStackNavigator = () => {
	return (
		<UploadStack.Navigator initialRouteName="Upload">
			<UploadStack.Screen name="Upload" component={UploadScreen} />
			<UploadStack.Screen name="Detail" component={DetailScreen} />
		</UploadStack.Navigator>
	);
};
export default DashboardStackNavigator;
