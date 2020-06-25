import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/header/Header';

const Profile = () => {
	return (
		<View style={styles.container} >
			<AppHeader>
				Profile
      </AppHeader>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
