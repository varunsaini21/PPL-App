import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Post from "../components/Post";
import DrawerContent from "../components/DrawerContent";
import axios from "axios";
import { createDrawerNavigator } from '@react-navigation/drawer';

import config from "../Config";
import UploadPost from "../components/UploadPost";

const DrawerNav = createDrawerNavigator();

const Timeline = ({ setToken, setUser, user }) => {

    return (
        <DrawerNav.Navigator
            drawerContent={(props) => (
                <DrawerContent {...props} setUser={setUser} user={user} setToken={setToken} />
            )}
        >
            <DrawerNav.Screen name="Timeline" component={Post} />
            <DrawerNav.Screen name="UploadPost">
                {(props) => (
                    <UploadPost {...props} setToken={setToken} setUser={setUser} user={user} />
                )}
            </DrawerNav.Screen>
        </DrawerNav.Navigator>
    );
};
export default Timeline;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },
    uploadPost: {},
    post: {
        marginTop: 20,
        marginBottom: 30
    },
});