import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Movie (props) {
  return (<View style={styles.movie}>
          <Text>hallå {props.item.name}</Text>
        </View>)
}
const styles = StyleSheet.create({
  movie: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    height: 50,
    margin: 5,
  }
});
