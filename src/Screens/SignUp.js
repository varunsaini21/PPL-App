import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	Pressable,
	ScrollView
} from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation, setUser, setToken }) => {
	const [registerDetails, setRegisterDetails] = useState({
		username: "",
		password: "",
		email: "",
		firstname: "",
		lastname: "",
	});
	const handleChange = (key, value) => {
		// console.log(key, value);
		setRegisterDetails({
			...registerDetails,
			[key]: value,
		});
	};

	const handlesubmit = () => {
		const { username, password, email, firstname, lastname } = registerDetails;
		console.log(username, password, email, firstname, lastname);
		axios
			.post("http://192.168.43.28:3001/user/register", {
				...registerDetails,
			})
			.then((res) => {
				alert("Welcome !");
				console.log(res.data.data);
				setToken(true);
				setUser(res.data.data);

				//Async storage
			})
			.catch(err => console.log(err));
	};
	return (
		<ScrollView>
			<View>
				<View style={styles.logInContainer}>
					<Text style={styles.title}>Create An Account</Text>
					<View>
						<Text>Username</Text>
						<TextInput
							title="username"
							value={registerDetails.username}
							onChangeText={(e) => handleChange("username", e)}
							placeholder="Enter Your username"
						/>
					</View>
					<View>
						<Text>Password</Text>
						<TextInput
							title="password"
							value={registerDetails.password}
							onChangeText={(e) => handleChange("password", e)}
							placeholder="Enter Your password"
						/>
					</View>
					<View>
						<Text>Email</Text>
						<TextInput
							title="email"
							value={registerDetails.email}
							onChangeText={(e) => handleChange("email", e)}
							placeholder="Enter Your Email"
						/>
					</View>
					<View>
						<Text>First Name</Text>
						<TextInput
							title="firstname"
							value={registerDetails.firstname}
							onChangeText={(e) => handleChange("firstname", e)}
							placeholder="Enter Your First Name"
						/>
					</View>
					<View>
						<Text>Last Name</Text>
						<TextInput
							title="lastname"
							value={registerDetails.lastname}
							onChangeText={(e) => handleChange("lastname", e)}
							placeholder="Enter Your Last Name"
						/>
					</View>
					<View>
						<View style={styles.logInButtonContainer}>
							<Button
								color="#F47B13"
								onPress={() => {
									handlesubmit();
								}}
								title="Register"
							/>
						</View>
						<View>
							<Text>I already have an account</Text>
							<Pressable onPress={() => navigation.navigate("SignIn")}>
								<Text style={{ color: "blue" }}>Log in to my Account </Text>
							</Pressable>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};
export default Register;

const styles = StyleSheet.create({
	logInContainer: {
		margin: 10,
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
		height: 150,
		width: 150,
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