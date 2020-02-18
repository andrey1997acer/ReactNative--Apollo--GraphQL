
import React, { useState } from 'react';
import { ApolloProvider} from 'react-apollo'; 
import Home from './src/Screen/Home1';
import Apollo from './Apollo/Apollo3';




export default Index= ()=> {
  const [client, setClient] = useState(Apollo)
  
    return (
      <ApolloProvider client={client} >
        <Home />
      </ApolloProvider>
    );
  
}
