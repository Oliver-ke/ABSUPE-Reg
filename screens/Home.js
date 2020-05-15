import * as React from 'react';
import { StyleSheet, Text, View, Animated, Platform, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StudentCard from '../components/card/Card';
import colors from '../constants/Colors';

const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HomeScreen = ({ navigation }) => {
	const scrollY = React.useRef(new Animated.Value(0)).current;
	const [ refreshing, setRefereshing ] = React.useState(false);

	const headerTranslate = scrollY.interpolate({
		inputRange: [ 0, HEADER_SCROLL_DISTANCE ],
		outputRange: [ 0, -HEADER_SCROLL_DISTANCE ],
		extrapolate: 'clamp'
	});

	return (
		<View style={{ ...styles.container, backgroundColor: colors.primaryColor }}>
			<Animated.ScrollView
				scrollEventThrottle={1}
				onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: scrollY } } } ], {
					useNativeDriver: true
				})}
				contentContainerStyle={{
					marginTop: HEADER_MAX_HEIGHT,
					paddingTop: 20,
					paddingBottom: 110,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					backgroundColor: '#fff',
					paddingHorizontal: 10
				}}
				style={{
					...styles.container,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20
				}}
				contentInset={{
					top: 50
				}}
				contentOffset={{
					y: -HEADER_MAX_HEIGHT
				}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={() => {
							setRefereshing(true);
							setTimeout(() => setRefereshing(false), 1000);
						}}
						// Android offset for RefreshControl
						progressViewOffset={HEADER_MAX_HEIGHT}
					/>
				}
			>
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
					navigation={navigation}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
					navigation={navigation}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
					navigation={navigation}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
					navigation={navigation}
				/>
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
					navigation={navigation}
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
				<StudentCard
					name="Robert Hooks"
					grade="Primary one"
					date="20th July, 2020"
					status="Uploaded"
					address="Emeculim street elekahia"
					imgUrl={require('../assets/images/avater.jpg')}
				/>
			</Animated.ScrollView>
			<Animated.View
				pointerEvents="none"
				style={[ styles.header, { transform: [ { translateY: headerTranslate } ] } ]}
			>
				<Text style={styles.headerText}>
					Mavins James - <Text style={{ color: colors.secondaryColor, fontWeight: '300' }}>Nortify</Text>
				</Text>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryColor
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.primaryColor,
		overflow: 'hidden',
		height: HEADER_MAX_HEIGHT
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
