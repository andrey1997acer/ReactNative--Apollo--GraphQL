import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import gql from "graphql-tag";
import { Query } from "react-apollo";

// import { useQuery } from "@apollo/react-hooks";

export default function App() {

  const FILES_STRING = gql`
query Files{
  files
}`;

  return (
    <Query query={FILES_STRING} >
      {({ loading, error, data }) => {
        if (loading) return <View style={styles.container}>
          <Text>Cargando!!</Text>
        </View>;
        if (error) return <View style={styles.container}>
          <Text>{error.message}</Text>
        </View>;
        return <View style={styles.container}>

      <Text>{data.files}</Text>

        </View>
      }}


    </Query>
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
