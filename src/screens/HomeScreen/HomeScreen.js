import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default class HomeScreen extends Component {



    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                    <Button title="Menu"
                        onPress={() => this.props.navigation.toggleDrawer()} />


                </View>
                <View style={styles.container}>

                    <Text>Home Screen</Text>
                    <Button
                        title="Go to Detail"
                        onPress={() => this.props.navigation.navigate("Details", { name: "React Native Navigation-5" })}
                    />
                    <Text></Text>
                    <Button
                        title="Go to My Profile"
                        onPress={() => this.props.navigation.navigate("Profile", {
                            screen: "Profile"

                        })}
                    />

                </View>
            </View>





        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
});