
import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import RouterPath from './RouterPath/RouterPath';
import { Provider } from 'react-redux';
import Store from '../src/Store/Store'
import Header from './Component/Header';




function App() {

   const client = new ApolloClient({
     uri:"http://localhost:4000/",
     cache: new InMemoryCache(),
   })


  return (
    <div className="App">
      <Provider store={Store()}>
     <ApolloProvider client={client}>
    <Header/>
    <RouterPath/>
  
     </ApolloProvider>
     </Provider>
    </div>
  );
}

export default App;
