import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import NavBar from './src/components/NavBar';
import Timeline from './src/Screens/Timeline';
import AuthNavigator from './src/Navigator/AuthNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage/';

const App = () => {
	const [token, setToken] = useState();
	const [user, setUser] = useState();
	const load = async () => {
		try {
			console.log("TOKEN:", token);
			const value = await AsyncStorage.getItem("TOKEN");
			if (value !== null) setToken(value);
		} catch (error) {
			// Error retrieving data
			console.log("APP.js>>>error", error);
		}
	};
	useEffect(() => {
		load();
	}, [token]);

	return (
		<NavigationContainer>
			<NavBar />
			{token === true ?
				(<Timeline setToken={setToken} user={user} setUser={setUser} />)
				:
				(<AuthNavigator setToken={setToken} user={user} setUser={setUser} />)
			}
		</NavigationContainer>
	);
}

const Styles = StyleSheet.create({
	Heading: {
		fontSize: 35,
	},
	NavBar: {
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: 'rgb(255, 153, 0)',
		margin: 0
	}

});
export default App;