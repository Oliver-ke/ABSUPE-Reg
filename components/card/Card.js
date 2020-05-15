import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import colors from '../../constants/Colors';

const Card = ({ name, address, grade, date, status, imgUrl }) => {
	return (
		<View style={styles.card}>
			<View style={styles.cardImg}>
				<Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={imgUrl} />
			</View>
			<View style={styles.detail}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.class}>{grade}</Text>
				<Text style={styles.class}>{address}</Text>
			</View>
			<View style={styles.property}>
				<Text style={styles.nextBtn}>
					<FontAwesome name="long-arrow-right" size={24} color="rgba(245,196,47,0.5)" />
				</Text>
				<Text style={{ ...styles.textProperty, color: '#000' }}>{date}</Text>
				<Text
					style={{ ...styles.textProperty, fontSize: 12, color: 'green', fontWeight: 'bold', marginTop: 2 }}
				>
					Uploaded {status === 'Uploaded' ? <Feather name="check" size={12} color="green" /> : 'Waiting..'}
				</Text>
			</View>
		</View>
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
	}
});
