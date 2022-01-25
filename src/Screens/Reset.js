import React from "react";
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

const Reset = () => {
    return (
        <View>
            <View style={styles.logInContainer}>
                <Text style={styles.title}>Reset Password</Text>
                <View>
                    <Text>Enter New Password</Text>
                    <TextInput placeholder="Enter Your Password" />
                </View>
                <View>
                    <Text>Confirm Password</Text>
                    <TextInput placeholder="Enter Your confirm password" />
                </View>
                <View>
                    <View style={styles.logInButtonContainer}>
                        <Button color="#F47B13" title="Submit" />
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Reset;

const styles = StyleSheet.create({
    container: {},
    welcomeContainer: {
        marginLeft: 20,
    },
    logInContainer: {
        marginLeft: 20,
    },
    title: {
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