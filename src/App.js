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
    sortOrder: "descending",
    error: null,
    searchInput: '',
  };

  componentDidMount() {
    API.usersList()
      .then(response => {
        this.setState({
          employees: response.data.results,
          filteredEmployees: response.data.results,
          sortedEmployees: response.data.results,
        })
      })
  };

  onChange = (e) => {
    this.searchFunction(e.target.value);
    this.setState({ searchInput: e.target.value })
  }

  onClick = (e, sortKey) => {
    this.sortFunction(e, sortKey);
  }

  sortFunction = (sortKey) => {
    console.log("passed sortKey is", sortKey);
    let result;
    if (this.state.sortOrder === "descending") {
      switch (sortKey) {
        case 'name':
          result = this.state.employees.sort(function (a, b) { return ('' + a.name.first).localeCompare(b.name.first); });
          break;
        case 'phone':
          result = this.state.employees.sort(function (a, b) { return ('' + a.phone).localeCompare(b.phone); });
          break;
        case 'email':
          result = this.state.employees.sort(function (a, b) { return ('' + a.email).localeCompare(b.email); });
          break;
        case 'dob':
          result = this.state.employees.sort(function (a, b) { return ('' + a.dob.date).localeCompare(b.dob.date); });
          break;
        default:
          return;
      }
      this.setState({
        filteredEmployees: result,
        sortOrder: "ascending"
      })
    }
    else if (this.state.sortOrder === "ascending") {
      switch (sortKey) {
        case 'name':
          result = this.state.employees.sort(function (a,b) { return ('' + b.name.first).localeCompare(a.name.first); });
          break;
        case 'phone':
          result = this.state.employees.sort(function (a, b) { return ('' + b.phone).localeCompare(a.phone); });
          break;
        case 'email':
          result = this.state.employees.sort(function (a, b) { return ('' + b.email).localeCompare(a.email); });
          break;
        case 'dob':
          result = this.state.employees.sort(function (a, b) { return ('' + b.dob.date).localeCompare(a.dob.date); });
          break;
        default:
          return;
      }
      this.setState({
        filteredEmployees: result,
        sortOrder: "descending"
      })
    }


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
      <div className="App" style={{backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%);"}}>
        <Header />
        <SearchBar
          searchInput={this.state.searchInput}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          searchFunction={this.searchFunction} />
        <Table
          employees={this.state.filteredEmployees}
          onClick={this.onClick}
          pointerSymbol={this.state.pointerSymbol}
        />
      </div>
    );
  }

}

export default App;







