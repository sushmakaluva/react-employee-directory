import React, { Component } from 'react';
import API from '../utils/API';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        API.usersList()
            .then(response => response.json())
            .then(response => this.setState({ employees: response.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <table className="table table-bordered table-striped table-hover table-condensed" >
                <thead>
                    <tr>
                        <th>Image <span className="pointer"></span></th>
                        <th>Name <span className="pointer"></span></th>
                        <th>Phone <span className="pointer"></span></th>
                        <th>Email <span className="pointer"></span></th>
                        <th>DOB <span className="pointer"></span></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(function (User) {
                        return (
                            <tr key={User.id}>
                                <td>
                                    <img src={User.picture.thumbnail} alt="profile pic"></img>
                                </td>
                                <td>{User.name.first + " " + User.name.last}</td>
                                <td>{User.phone}</td>
                                <td>{User.email}</td>
                                <td>{User.dob.date}</td>
                            </tr>
                        );
                    })
                    }

                </tbody>
            </table>
        );
    }
}

export default Table;





