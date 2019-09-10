import React, { Component } from 'react'
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './fonts/stylesheet.css'
import Content from './components/contents/Content'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Albumlist from './components/contents/AlbumList'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})

export class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div>
            <Header />
            <Route exact path="/" component={Content} />
            <Route path="/Albumlist" component={Albumlist} />
            <Footer />
          </div>
        </ApolloProvider>
      </Router>
    )
  }
}

export default App
