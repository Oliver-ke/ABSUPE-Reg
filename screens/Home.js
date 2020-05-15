import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StudentCard from '../components/card/Card';
import colors from '../constants/Colors';

const HomeScreen = () => {
	return (
		<View style={{ ...styles.container, backgroundColor: colors.primaryColor }}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					Mavins James - <Text style={{ color: colors.secondaryColor, fontWeight: '300' }}>Nortify</Text>
				</Text>
			</View>
			<ScrollView style={styles.footer} contentContainerStyle={{ paddingVertical: 20 }}>
				<View>
					<Text style={styles.footerHeader}>Recent Uploads</Text>
				</View>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	header: {
		height: '10%',
		backgroundColor: colors.primaryColor,
		paddingHorizontal: 20,
		justifyContent: 'flex-end',
		paddingBottom: 20
	},
	headerText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '700'
	},
	footer: {
		height: '90%',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		backgroundColor: '#E6E7E9',
		//paddingVertical: 50,
		paddingHorizontal: 10
	},
	footerHeader: {
		fontSize: 20,
		color: colors.primaryColor,
		fontWeight: '700',
		marginBottom: 10
	}
});

export default HomeScreen;
