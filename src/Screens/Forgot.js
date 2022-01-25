import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	Header,
	Image,
	TouchableOpacity,
	Button,
	TextInput,
	Pressable,
} from "react-native";

import axios from "axios";

const Forgot = ({ navigation }) => {
	const [forgotEmail, setForgotEmail] = useState();
	const handle = (e) => {
		setForgotEmail(e);
	};
	const submit = async () => {
		const email = forgotEmail;
		console.log("EMAIL", email);
		await axios
			.post('http://192.168.43.28:3001/user/forgot', { email }
			)
			.then((res) => {
				console.log('Email found', res.data);
				console.log(res.data);
				if (res.data.success === false) {
					alert('Email not found');
				}
				else {
					;
					// navigate('/reset');
				}

			})
			.catch((err) => {
				console.log('Forgotpw.js>>>err', err);
				localStorage.forgotPw = 'null';
			})
	};
	return (
		<View>
			<View style={styles.logInContainer}>
				<Text style={styles.title}>Forgot Password</Text>
				<View>
					<Text>Email</Text>
					<TextInput
						placeholder="Enter Your Email"
						value={forgotEmail}
						onChangeText={(e) => handle(e)}
					/>
				</View>
				<View>
					<View style={styles.logInButtonContainer}>
						<Button onPress={() => submit()} color="#F47B13" title="Submit" />
					</View>
				</View>
			</View>
		</View>
	);
};
export default Forgot;

const styles = StyleSheet.create({
	container: {},
	welcomeContainer: {
		marginLeft: 20,
	},
	logInContainer: {
		marginLeft: 20,
	},
	title: {
		textAlign: 'center',
		fontSize: 36,
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