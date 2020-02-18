import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import gql from "graphql-tag";

import { useQuery } from "@apollo/react-hooks";

const FILES_STRING = gql`
    query Files{
    files
}`;

export default function App2() {
    const {loading, data} = useQuery(FILES_STRING, {variables:{}})
  return (
    <View style={styles.container}>
    <Text>{loading? 'Hola': data.files}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
