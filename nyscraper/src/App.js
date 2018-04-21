import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import './App.css';

class App extends Component {
  render () {
    return (
      <Wrapper>
          <Header />
          <Search />
          <Results />
          <Saved />
        </Wrapper>
    );
  }





}

export default App;
