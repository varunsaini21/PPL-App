import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBar = () => {
	const handleClick = () => {
		setUser();
		setToken(false);
	}
	return (
		<View style={Styles.NavBar}>
			<Text style={Styles.Heading}>PPL</Text>
		</View>
	);
};

const Styles = StyleSheet.create({
	Heading: {
		fontSize: 35,
	},
	NavBar: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: 'rgb(255, 153, 0)',
		margin: 0
	}

});
export default NavBar;