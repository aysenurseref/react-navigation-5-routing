import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default class LoginScreen extends Component {



    render() {

        return (
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate("App")}
                />
                <Text></Text>
                <Button
                    title="Register"
                    onPress={() => this.props.navigation.push("Register")}
                />

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