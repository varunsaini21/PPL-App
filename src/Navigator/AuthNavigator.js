import React from 'react';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import Forgot from '../Screens/Forgot';
import Reset from '../Screens/Reset';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AuthNavigator = ({ setToken, setUser, user }) => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="SignIn">
			{(props) => (
				<SignIn {...props} setToken={setToken} setUser={setUser} user={user} />
			)}
		</Stack.Screen>

		<Stack.Screen name="SignUp">
			{(props) => (
				<SignUp {...props} setToken={setToken} setUser={setUser} user={user} />
			)}
		</Stack.Screen>

		<Stack.Screen name="Forgot">
			{(props) => (
				<Forgot {...props} setToken={setToken} setUser={setUser} user={user} />
			)}
		</Stack.Screen>

		<Stack.Screen name="Reset">
			{(props) => (
				<Reset {...props} setToken={setToken} setUser={setUser} user={user} />
			)}
		</Stack.Screen>
	</Stack.Navigator>
)

export default AuthNavigator;