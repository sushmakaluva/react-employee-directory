import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import SearchBar from './Components/SearchBar'
import API from './utils/API';

class App extends Component {
  state = {
    isLoading: true,
    employees: [],
    filteredEmployees: [],
    error: null,
    searchInput: ''
  };

  componentDidMount() {
    API.usersList()
      .then(response => {
        this.setState({
          employees: response.data.results,
          filteredEmployees: response.data.results
        })
      })
  };

  onChange = (e) => {
    this.searchFunction(e.target.value);
    this.setState({ searchInput: e.target.value })

  }

  searchFunction = (searchInput) => {
    const searchKeyword = searchInput.trim().toLowerCase();
    if (searchKeyword) {
      const filtered = this.state.employees.filter(employee => {
        return (((employee.name.first.toLowerCase()).includes(searchKeyword)) ||
          ((employee.name.last.toLowerCase()).includes(searchKeyword)));
      })
      this.setState({
        filteredEmployees: filtered
      })
    }
    else {
      this.setState({
        filteredEmployees: this.state.employees
      })
    }


  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchInput={this.state.searchInput}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          searchFunction={this.searchFunction} />
        <Table employees={this.state.filteredEmployees} />
      </div>
    );
  }

}

export default App;







