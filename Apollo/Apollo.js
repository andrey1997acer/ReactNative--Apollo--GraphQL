
import ApolloClient, { InMemoryCache } from 'apollo-boost'; // tiene la configuracion

export default Connect =()=>{
const client = new ApolloClient({
    uri: "http://192.168.1.104:5000/graphql",
    cache: new InMemoryCache({   //esto es para que cuando edito los datos no me genere error a la hora de hacer la mutation con el __typename abajo de emails
      addTypename: false
    }),
    onError: ({networkError, graphQLErrors}) =>{
      console.log('graphQLErrors', graphQLErrors);
      console.log('networkError', networkError);
  
  
    }
  });

  return client
 }