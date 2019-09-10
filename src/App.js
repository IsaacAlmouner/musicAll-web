import React, { Component } from 'react'
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header  from './components/layout/Header';
import Footer  from './components/layout/Footer';
import './fonts/stylesheet.css'
import Content from './components/contents/Content'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
