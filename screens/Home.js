import * as React from 'react';
import { StyleSheet, Text, View, Animated, Platform, RefreshControl } from 'react-native';
import StudentCard from '../components/card/Card';
import HeaderCard from '../components/headerCard/HeaderCard';
import colors from '../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { saved } from '../utils/mockedData';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HomeScreen = ({ navigation }) => {
	const scrollY = React.useRef(new Animated.Value(0)).current;
	const [refreshing, setRefereshing] = React.useState(false);

	const headerTranslate = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, -HEADER_SCROLL_DISTANCE],
		extrapolate: 'clamp'
	});

	const titleScale = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [1, 1, 1.1],
		extrapolate: 'clamp'
	});
	const titleTranslate = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 100, 150],
		extrapolate: 'clamp'
	});

	return (
		<View style={{ ...styles.container, backgroundColor: colors.primaryColor }}>
			<Animated.ScrollView
				scrollEventThrottle={1}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
					useNativeDriver: true
				})}
				contentContainerStyle={styles.scrollContainer}
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
						progressViewOffset={HEADER_MAX_HEIGHT}
					/>
				}
			>
				<View>
					<Text style={styles.footerHeader}>Recent Uploads</Text>
				</View>
				{saved.map((student, idx) => <StudentCard key={idx} student={student} navigation={navigation} />)}
			</Animated.ScrollView>
			<Animated.View
				pointerEvents="none"
				style={[styles.header, { transform: [{ translateY: headerTranslate }] }]}
			>
				<Animated.View
					style={[
						styles.bar,
						{
							transform: [{ scale: titleScale }, { translateY: titleTranslate }]
						}
					]}
				>
					<Text style={styles.headerText}>
						Mavins James {' '}
						<Entypo name="user" size={18} style={{ opacity: 0.2 }} color={colors.secondaryColor} />
					</Text>
					<View style={styles.circleContainer}>
						<HeaderCard quantity="27" text="Uploads" quantityColor="#30DEBF" />
						<HeaderCard quantity="18" text="Waiting" quantityColor="#B80F0A" />
					</View>
				</Animated.View>
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
		height: HEADER_MAX_HEIGHT,
		paddingHorizontal: 10
	},
	scrollContainer: {
		marginTop: HEADER_MAX_HEIGHT,
		paddingTop: 20,
		paddingBottom: 160,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		backgroundColor: '#fff',
		paddingHorizontal: 10
	},
	bar: {
		height: 32,
		marginTop: Platform.OS === 'ios' ? 28 : 38,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0
	},
	headerText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '700'
	},
	footer: {
		height: '90%',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		backgroundColor: '#E6E7E9',
		paddingHorizontal: 10
	},
	footerHeader: {
		fontSize: 18,
		marginLeft: 10,
		color: colors.primaryColor,
		fontWeight: '700',
		marginBottom: 10
	},
	circleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '90%',
		position: 'absolute',
		top: 20,
		height: 200
	}
});

export default HomeScreen;
