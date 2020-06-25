import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/header/Header';
import Button from '../components/button/Button';
import { AntDesign } from '@expo/vector-icons';
import StudentCard from '../components/card/Card';
import { saved } from '../utils/mockedData';
import { FlatList } from 'react-native-gesture-handler'
// import { FloatingAction } from "react-native-floating-action";


const UploadScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<AppHeader headerContentStyles={{ justifyContent: "flex-start", paddingLeft: 10 }}>
				Your Uploads {" "} <AntDesign name="clouduploado" size={24} color="#ffb75a" />
			</AppHeader>
			<View style={styles.btnWrapper}>
				<Button
					title="New Upload"
					onPress={() => navigation.navigate('StudentForm')}
					containerStyle={{
						marginTop: 20,
						borderRadius: 50,
						paddingHorizontal: 10,
						paddingVertical: 8,
						backgroundColor: "#fff",
						borderColor: "#fff",
						elevation: 10
					}}
					textStyle={{
						color: "#2D2254"
					}}
					iconName="pluscircleo"
				/>
			</View>
			<View style={styles.listWrapper}>
				<FlatList
					style={{ paddingTop: 60, marginBottom: 25, paddingHorizontal: 10 }}
					data={saved}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => <StudentCard student={item} navigation={navigation} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 20
	},
	listWrapper: {
		marginTop: 10,
	},
	btnWrapper: {
		flexDirection: "row-reverse",
		position: "absolute",
		top: 50,
		right: 10,
		width: 200,
		zIndex: 20
	}
});

export default UploadScreen;
