

import { Platform} from 'react-native';
import { ApolloClient, InMemoryCache, HttpLink, } from 'apollo-client-preset';

export default Connect =()=>{
const client = new ApolloClient({
  cache: new InMemoryCache({
    //esto es para que cuando edito los datos no me genere error a la hora de hacer la mutation con el __typename abajo de emails
    addTypename: false
  }),
  link: new HttpLink({uri: Platform.select({
      ios: 'http://192.168.1.104:5000/graphql',
      android: 'http://192.168.1.104:5000/graphql'
    })
  })
})
return client

}
  
  


