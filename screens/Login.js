import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome, Feather } from '@expo/vector-icons';
import colors from '../constants/Colors';

const LoginScreen = ({ navigation }) => {
	const [inputs, setInputs] = useState({
		passcode: '',
		password: ''
	});
	const [secureEntry, setSecureEntry] = useState(false);
	const [wasTyped, setWasTyped] = useState({
		password: false,
		passcode: false
	});

	const handleInputChange = (name, value) => setInputs({ ...inputs, [name]: value });

	const validator = (field) => {
		if (field === 'passcode') {
			// returns true or false if input is grater than 4
			return wasTyped.passcode ? inputs.passcode.trim().length >= 4 : true;
		}
		if (field === 'password') {
			// returns true or false if input is greate than 6 and was not typed
			return wasTyped.password ? inputs.password.trim().length >= 6 : true;
		}
		return false;
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text_header}>Account Login</Text>
				<View style={styles.underline} />
			</View>
			<Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.background }]}>
				<Text style={[styles.text_footer, { color: colors.text }]}>School Passcode</Text>
				<View style={styles.action}>
					<FontAwesome name="user-o" color={colors.text} size={20} />
					<TextInput
						placeholder="your passcode"
						placeholderTextColor="#666666"
						style={[styles.textInput, { color: colors.text }]}
						autoCapitalize="none"
						onChangeText={(val) => handleInputChange('passcode', val)}
						onEndEditing={() => setWasTyped({ ...wasTyped, passcode: true })}
					/>
					{validator('passcode') ? (
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="green" size={20} />
						</Animatable.View>
					) : null}
				</View>
				{validator('passcode') ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>Passcode must be 4 characters long.</Text>
					</Animatable.View>
				)}
				<Text style={[styles.text_footer, { color: colors.text, marginTop: 15 }]}>Password</Text>
				<View style={styles.action}>
					<Feather name="lock" color={colors.text} size={20} />
					<TextInput
						placeholder="Your Password"
						placeholderTextColor="#666666"
						secureTextEntry={secureEntry}
						style={[styles.textInput, { color: colors.text }]}
						autoCapitalize="none"
						onChangeText={(val) => handleInputChange('password', val)}
						onEndEditing={() => setWasTyped({ ...wasTyped, password: true })}
					/>
					<TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
						{secureEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
								<Feather name="eye" color="grey" size={20} />
							)}
					</TouchableOpacity>
				</View>
				{validator('password') ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
					</Animatable.View>
				)}
				<TouchableOpacity>
					<Text style={{ color: colors.primaryColor, marginTop: 15, opacity: 0.9 }}>Forgot password?</Text>
				</TouchableOpacity>
				<View style={styles.button}>
					<TouchableOpacity style={{ ...styles.signIn }} onPress={() => navigation.navigate('App')}>
						<Text style={[styles.textSign, { color: '#fff' }]}>
							Sign In <Feather name="log-in" size={15} color={colors.secondaryColor} />
						</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryColor
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 18,
		fontFamily: 'Roboto',
		paddingBottom: 50
	},
	underline: {
		width: 150,
		height: 1,
		backgroundColor: colors.secondaryColor,
		marginTop: 2
	},
	footer: {
		flex: 3,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingTop: 60
	},
	text_header: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 30
	},
	text_footer: {
		color: '#05375a',
		fontSize: 18
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderWidth: 2,
		height: 50,
		borderColor: '#ccc',
		paddingBottom: 5,
		borderRadius: 10,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#FF0000',
		paddingBottom: 5
	},
	textInput: {
		flex: 1,
		paddingLeft: 10,
		color: '#05375a'
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14
	},
	button: {
		alignItems: 'center',
		marginTop: 50
	},
	signIn: {
		width: '100%',
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#382C83'
	},
	textSign: {
		fontSize: 18,
		fontWeight: '500'
	}
});
