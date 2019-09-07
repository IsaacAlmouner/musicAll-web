import React, { Component } from 'react'
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ArtistList from './components/ArtistList';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <ArtistList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
