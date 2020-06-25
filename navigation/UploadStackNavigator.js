import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

const UploadStack = createStackNavigator();

// screens
// TODO: add the "add the screen for users to add students"
import UploadScreen from '../screens/Upload';
import DetailScreen from '../screens/Detail';
import StudentForm from '../screens/StudentForm'

const DashboardStackNavigator = () => {
	return (
		<UploadStack.Navigator initialRouteName="Upload">
			<UploadStack.Screen options={{ headerShown: false }} name="Upload" component={UploadScreen} />
			<UploadStack.Screen options={{ headerShown: false }} name="Detail" component={DetailScreen} />
			<UploadStack.Screen options={{ headerShown: false }} name="StudentForm" component={StudentForm} />
		</UploadStack.Navigator>
	);
};
export default DashboardStackNavigator;
