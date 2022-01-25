import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList
} from "react-native";

import config from "../Config";

const Post = ({ item }) => {
    return (
        //  main container
        <View style={styles.mainContainer}>
            {/* inner innerContainer */}
            <View style={styles.innerContainer}>
                {/* TitleContainer */}
                <View style={styles.titleContainer}>
                    <Text style={{ color: "#F47B13", fontSize: 21, fontWeight: "bold" }}>
                        {item.title}
                    </Text>
                    <View style={{ flexDirection: "row", marginLeft: "auto" }}>
                        <Image
                            style={{ height: 30 }}
                            source={require("../../images/side_arc.png")}
                        />
                        <View
                            style={{
                                backgroundColor: "#FF5E33",
                                height: 30,
                                width: 45,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold" }}>
                                {item.category}
                            </Text>
                        </View>
                    </View>
                </View>
                {/* userDeatailsContainer */}
                <View style={styles.userDetailesContainer}>
                    <Image source={require("../../images/pic_small.png")} />
                    <Text
                        style={{ color: "#F4713B", marginLeft: 20, fontWeight: "bold" }}
                    >
                        {item.userName}
                    </Text>
                    <Text style={{ color: "#F4713B", marginLeft: "auto" }}>
                        {item.date}
                    </Text>

                    <Text style={{ color: "#F4713B", marginLeft: "auto" }}>
                        {item.time}
                    </Text>
                </View>
                {/* imageContainer */}
                <View style={styles.imageContainer}>
                    {/* {console.log(item.image)} */}
                    <Image
                        style={{ height: 200, width: "100%" }}
                        source={{ uri: `${config.SERVER_URL}/${item.image}` }}
                    />
                </View>
                {/* footerContainer */}
                <View style={styles.footerContainer}>
                    {/* shareContainer */}
                    <View style={styles.buttonContainer}>
                        <Image source={require("../../images/icon_001.png")} />
                    </View>
                    {/* FlageContainer */}
                    <View style={styles.buttonContainer}>
                        <Image source={require("../../images/btm_img2.png")} />
                    </View>
                    {/* likeContainer */}
                    <View style={styles.buttonContainer}>
                        <Image source={require("../../images/icon_003.png")} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get(`${config.SERVER_URL}/post/present`)
            .then((res) => {
                console.log('Timeline.js>>>Data', res.data)
                setPosts(res.data);
            })
            .catch(err => console.log("Timeline.js>>>axios", err));
    }, []);
    console.log("Timeline.js>>>post1", posts[0])

    return (
        <View style={styles.container}>
            <View style={styles.post}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <Post item={item} />}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </View>
    );
}
export default AllPosts;

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 2,
        borderBottomColor: "#F47B13",
        marginBottom: 30,
    },
    innerContainer: {
        flexDirection: "column",
    },
    titleContainer: {
        flexDirection: "row",
        marginLeft: 5,
    },
    userDetailesContainer: {
        marginVertical: 7,
        flexDirection: "row",
    },
    imageContainer: {},
    footerContainer: {
        marginVertical: 7,
        flexDirection: "row",
    },
    buttonContainer: {
        width: 60,
        padding: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F47B13",
        marginRight: 20,
        borderRadius: 5,
    },
});