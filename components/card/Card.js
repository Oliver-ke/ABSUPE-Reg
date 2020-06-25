import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';
import colors from '../../constants/Colors';

const Card = ({ student, navigation }) => {
	const { LastName, FirstName, profileImg, AdmissionDate, status, Gender, GuardianAddress } = student;
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Detail', { student })} style={styles.card}>
			<View style={styles.cardImg}>
				<Image style={{ width: 60, height: 60, resizeMode: 'cover' }} source={profileImg} />
			</View>
			<View style={styles.detail}>
				<Text style={styles.name}>{`${LastName} ${FirstName}`}</Text>
				<Text style={styles.class}>{Gender}</Text>
				<Text style={styles.class}>{GuardianAddress}</Text>
			</View>
			<View style={styles.property}>
				<Text style={styles.nextBtn}>
					<Entypo name="dots-three-horizontal" size={24} color="rgba(0,0,0,0.7)" />
				</Text>
				<Text style={{ ...styles.textProperty, color: '#000' }}>{AdmissionDate}</Text>
				{status === 'Uploaded' ? (
					<Text
						style={{
							...styles.textProperty,
							...styles.status,
							color: 'green'
						}}
					>
						Uploaded <Feather name="check" size={12} color="green" />
					</Text>
				) : (
					<Text
						style={{
							...styles.textProperty,
							...styles.status,
							color: 'red'
						}}
					>
						Waiting <AntDesign name="retweet" size={12} color="red" />
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#f4f4f4f4',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		//justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10,
		minHeight: 70,
		marginVertical: 4,
		elevation: 2
	},
	cardImg: {
		width: 60,
		height: 60,
		borderRadius: 60,
		backgroundColor: colors.primaryColor,
		overflow: 'hidden',
		borderWidth: 2,
		borderColor: colors.primaryColor,
		marginRight: 10
	},
	name: {
		fontSize: 15,
		fontWeight: '700',
		color: colors.primaryColor
	},
	detail: {
		flex: 2
	},
	class: {
		fontSize: 13,
		color: 'rgba(0,0,0,0.6)'
	},
	property: {
		flex: 1
	},
	nextBtn: {
		textAlign: 'right'
	},
	textProperty: {
		textAlign: 'right',
		fontSize: 10,
		color: 'gray'
	},
	status: {
		fontSize: 12,
		fontWeight: 'bold',
		marginTop: 2
	}
});
