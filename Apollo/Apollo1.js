
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

 import { createUploadLink } from "apollo-upload-client";

export default Connect =()=>{
const link = createUploadLink({uri:'http://192.168.1.104:5000/graphql'})
const cache = new InMemoryCache({//esto es para que cuando edito los datos no me genere error a la hora de hacer la mutation con el __typename abajo de emails
    addTypename: false
})

const client = new ApolloClient({
    link,
    cache
})

return client
}