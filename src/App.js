/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchfield: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const filteredRobots = this.state.robots.filter((robots) => robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
