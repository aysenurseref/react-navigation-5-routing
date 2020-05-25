import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default class DetailsOneScreen extends Component {



    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>

                    <Button title="Menu"
                        onPress={() => this.props.navigation.toggleDrawer()} />


                </View>
                <View style={styles.container}>

                    <Text>Detail-1  Screen</Text>

                    <Button
                        title="Go to Deatil-2"
                        onPress={() => this.props.navigation.push("DetailsSecond", { name: "React Navigation" })}
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