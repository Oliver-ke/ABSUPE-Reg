import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UploadScreen = (props) => {
	console.log(props);
	return (
		<View>
			<Text style={styles.text}>This is the upload screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20
	}
});

export default UploadScreen;
