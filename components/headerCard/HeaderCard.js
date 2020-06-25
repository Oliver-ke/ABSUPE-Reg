import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderCard = ({ quantityColor, quantity, text }) => {
	return (
		<View style={styles.circle}>
			<Text style={{ fontSize: 25, color: quantityColor, fontWeight: 'bold' }}>{quantity}</Text>
			<Text style={{ fontSize: 18, color: '#ccc' }}>{text}</Text>
		</View>
	);
};

HeaderCard.defaultProps = {
	quantityColor: '#FFB75A'
};

export default HeaderCard;

const styles = StyleSheet.create({
	circle: {
		height: 100,
		width: 140,
		borderRadius: 10,
		elevation: 3,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(45, 34, 84, 0.5)'
	}
});
