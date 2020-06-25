import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../constants/Colors';
import { Feather, AntDesign } from '@expo/vector-icons';
import Field from '../components/field/Field';
import AppHeader from '../components/header/Header';

const HEADER_MAX_HEIGHT = 55;
const Detail = ({ route, navigation }) => {
	const {
		profileImg,
		LastName,
		FirstName,
		OtherName,
		Gender,
		DateOfBirth,
		NationalID,
		StateOfOriginID,
		LGAOfOriginId,
		AdmissionDate,
		ClassAdmittedId,
		TermAdmitted,
		YearOfAdmission,
		CurrentClassId,
		GuardianFirstName,
		GuardianLastName,
		GuardianOtherName,
		GuardianGender,
		GuardianPhoneNo,
		GuardianEmailAddress,
		GuardianRelationship,
		GuardianAddress,
		status
	} = route.params.student;
	return (
		<View style={{ ...styles.container }}>
			<AppHeader hasBackBtn={true} navigation={navigation}>
				Student Information
			</AppHeader>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				contentInset={{
					top: 50
				}}
				contentOffset={{
					y: 50
				}}
			>
				<View style={styles.content}>
					<View style={styles.profileImage}>
						<Image style={{ width: 150, height: 150, resizeMode: 'cover' }} source={profileImg} />
					</View>
					<View style={styles.progileNameContainer}>
						<Text style={{ fontSize: 17, fontWeight: '700', color: '#333' }}>{`${LastName} ${FirstName} ${OtherName}`}</Text>
						<Text style={{ color: '#333' }}>
							Status:
								{status === 'Uploaded' ? (
								<Text style={{ color: 'green' }}> Uploaded <Feather name="check" size={12} color="green" /></Text>
							) : (
									<Text style={{ color: 'red' }}>
										{" "} Waiting <AntDesign name="retweet" size={12} color="red" />
									</Text>
								)}
						</Text>
					</View>
					<Field label="Gender" value={Gender} />
					<Field label="Current Class" value="Primary 4" />
					<Field label="Admission Date" value={AdmissionDate} />
					<Field label="Year of Admission" value={YearOfAdmission} />
					<Field label="Date of Birth" value={DateOfBirth} />
					<Field label="State of Origin" value="Rivers State" />
					<Field label="Guardian Name" value={`${GuardianLastName} ${GuardianFirstName}`} />
					<Field label="Guardian Address" value={GuardianAddress} />
					<Field label="Guardian Phone number" value={GuardianPhoneNo} />
				</View>
			</ScrollView>
		</View>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryColor
	},
	content: {
		alignItems: 'flex-start',
		marginTop: 20
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		backgroundColor: colors.primaryColor,
		overflow: 'hidden',
		borderWidth: 1.5,
		borderColor: '#c4c4c4',
		alignSelf: 'center',
		marginBottom: 10
	},
	progileNameContainer: {
		width: '100%',
		paddingHorizontal: 10,
		alignItems: 'center',
		marginBottom: 10
	},
	scrollContainer: {
		marginTop: HEADER_MAX_HEIGHT - 30,
		paddingTop: 10,
		paddingBottom: 30,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		minHeight: '100%'
	},
	footer: {
		height: '90%',
		backgroundColor: '#E6E7E9',
		paddingHorizontal: 10
	},
});
