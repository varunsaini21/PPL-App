import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage/';

const DrawerContent = (props) => {

    const { firstName, lastName, userName } = props.user || {};
    console.log("DRAWERCONTENT>>>USER", props.user);
    const remove = async () => {
        try {
            props.setToken(false);
            props.setUser();
            // await AsyncStorage.removeItem("TOKEN");
            // await AsyncStorage.removeItem("TASKS");
        } catch (err) {
            console.log("DrawerContent>>>error", err);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.profilePic}>
                    {/* Image */}
                    <Image source={require("../../images/post_img.png")} />
                </View>
                <View style={styles.profileDetail}>
                    {/* name username */}
                    <Text style={{ fontSize: 18 }}>
                        {firstName + " " + lastName}
                    </Text>
                    <Text>{userName}</Text>
                </View>
            </View>
            {/* others Detaiils */}
            <View style={styles.Screens}>
                <TouchableOpacity style={styles.ScreenButton}
                    onPress={() => {
                        props.navigation.navigate("Timeline");
                    }}
                >
                    <Text style={styles.Screen}>Timeline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ScreenButton}
                    onPress={() => {
                        props.navigation.navigate("UploadPost");
                    }}
                >
                    <Text style={styles.Screen}>Upload A Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ScreenButton} onPress={() => remove()}>
                    <Text style={styles.Screen}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginLeft: 20,
    },
    profileContainer: {
        flexDirection: "row",
    },
    profilePic: {},
    profileDetail: {
        marginLeft: 40,
        padding: 10,
    },
    Screens: {
        marginRight: 20,
    },
    Screen: {
        padding: 20,
        fontWeight: "bold",
        fontFamily: "fontFamily",
        backgroundColor: "lightblue",
        borderRadius: 20,
    },
    ScreenButton: {
        marginVertical: 20,

    },
});