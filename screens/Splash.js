import React from 'react';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';

const SplashScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />
			<View style={styles.header}>
				<Image
					style={{ width: 150, height: 80, resizeMode: 'contain' }}
					source={require('../assets/images/logo.png')}
				/>
			</View>
			<Animatable.View animation="fadeInUpBig" style={styles.content}>
				<View style={styles.line} />
				<View style={{ marginBottom: 40 }}>
					<Text style={styles.textHeader}>We make student registration simply easy...</Text>
					<Text style={{ ...styles.textSmall, opacity: 0.7 }}>Sign in with your account</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<LinearGradient style={styles.btn} colors={[ colors.primaryColor, '#524e8b' ]}>
						<Text style={{ ...styles.textSmall, color: '#FFF', fontWeight: '600', fontSize: 17 }}>
							Continue <Entypo name="chevron-with-circle-right" size={17} color="#F5C42F" />
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		fontSize: 50,
		backgroundColor: colors.primaryColor
	},
	header: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primaryColor
	},
	content: {
		flex: 2,
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingHorizontal: 20
	},
	textHeader: {
		fontSize: 23,
		color: '#333333',
		fontWeight: '600',
		fontFamily: 'Roboto',
		marginBottom: 10
	},
	textSmall: {
		fontSize: 15,
		color: '#333',
		fontFamily: 'Roboto'
	},
	btn: {
		alignSelf: 'flex-end',
		width: 150,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		flexDirection: 'row'
	},
	line: {
		width: 50,
		height: 2,
		backgroundColor: '#c4c4c4',
		position: 'absolute',
		top: 4,
		alignSelf: 'center',
		borderRadius: 50
	}
});
