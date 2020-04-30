/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => { this.setState({ robots: users }); });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const filteredRobots = this.state.robots.filter((robots) => robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;
