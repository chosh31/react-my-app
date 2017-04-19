import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App2 extends Component {
  render() {
    var place = "World";
    return (
      <h1>Hello {place}</h1>
    );
  }
}

class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="6" name="Eggs" />
        <ListItem quantity="2" name="Milk" />
      </ul>
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity} X {this.props.name}
      </li>
    );
  }
}

class GroceryListChild extends Component {
  render() {
    return (
      <ul>
        <ListItemChild quantity="1">Bread</ListItemChild>
        <ListItemChild quantity="6">Eggs</ListItemChild>
        <ListItemChild quantity="2">Milk</ListItemChild>
      </ul>
    );
  }
}

class ListItemChild extends Component {
  render() {
    return (
      <li>
        {this.props.quantity} X {this.props.children}
      </li>
    );
  }
}

export default App;
// export default App2;
// export default GroceryList;
// export default GroceryListChild;
