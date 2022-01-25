import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	Pressable,
	ScrollView,
	TouchableOpacity
} from "react-native";

import axios from "axios";

const SignIn = ({ navigation, setToken, setUser, user }) => {

	const [logIn, setLogIn] = useState({
		email: "",
		password: "",
	});
	const handleChange = (key, value) => {
		setLogIn({
			...logIn,
			[key]: value,
		});
	};

	const save = async (result) => {
		try {
			await AsyncStorage.setItem("result", JSON.stringify(result));
		} catch (error) {
			console.log('SignIn:', error);
		}
	};

	const submitLogIn = async () => {
		const { email, password } = logIn;
		console.log(email, password);

		await axios
			.post('http://192.168.43.28:3001/user/login', {
				...logIn,
			})
			.then((res) => {
				console.log(res.data);
				if (res.data.success) {
					alert("Welcome !");
					setToken(true);
					setUser(res.data.data);

				}
			})
			.catch(err => console.log("SIGNIN ", err));
	};

	return (
		<ScrollView>
			<View>
				<View style={styles.logInContainer}>
					<Text style={styles.title}>Log In</Text>
					<View>
						<Text>Email</Text>
						<TextInput
							value={logIn.email}
							onChangeText={(e) => {
								handleChange("email", e);
							}}
							placeholder="Enter Your Email"
						/>
					</View>
					<View>
						<Text>Password</Text>
						<TextInput
							value={logIn.password}
							onChangeText={(e) => {
								handleChange("password", e);
							}}
							placeholder="Enter Your Password"
						/>
					</View>
					<View>
						<Text>Remember me</Text>
						<View style={styles.logInButtonContainer}>
							<Button
								color="#F47B13"
								onPress={() => {
									submitLogIn();
								}}
								title="Log In "
							/>
							<Pressable onPress={() => { navigation.navigate("Forgot") }}>
								<Text style={styles.forgot}>
									Forgot Password
								</Text>
							</Pressable>
						</View>
						<View>
							<Text>I do not have any account yet</Text>
							<Pressable
								onPress={() => {
									navigation.navigate("SignUp");
								}}
							>
								<Text style={{ color: "blue" }}>create a new account </Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	logInContainer: {
		marginLeft: 20,
	},
	title: {
		fontSize: 36,
		textAlign: 'center',
		fontWeight: "bold",
		color: "#F47B13",
	},
	paragraph: {
		color: "#807979",
	},
	image: {
		height: 250,
		width: 250,
		marginVertical: 10,
	},
	logInButtonContainer: {
		marginVertical: 20,
		flexDirection: "row",
	},
	forgot: {
		margin: 10,
	},
});