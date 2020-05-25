import React, { Component } from "react";
import { View, Text, StyleSheet,Button } from "react-native";


export default class ProfileScreen extends Component {



    render() {

        return (
            <View style={{flex: 1}}>
                <View style={{ flexDirection: 'row',marginTop:5 }}>
                
                    <Button  title="Menu"
                        onPress={() => this.props.navigation.toggleDrawer()} />


                </View>
            <View style={styles.container}>
           
                <Text>Welcome!</Text>


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
   
});