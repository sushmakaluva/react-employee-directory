import React from 'react';


function Table(props) {
    console.log(props);
    const { employees } = props;
    console.log("Employee List", employees);
    return (
        <div className="datatable">
            <table
                className={`table table-bordered table-striped table-hover table-condensed`}
                style={{
                    padding: 25,
                }} >
                <thead className="thead-dark">
                    <tr>
                        <th style={{ width: '10%' }}>Image <span className="pointer"></span></th>
                        <th style={{ width: '10%' }}>Name <span className="pointer"></span></th>
                        <th style={{ width: '20%' }}>Phone <span className="pointer"></span></th>
                        <th style={{ width: '20%' }}>Email <span className="pointer"></span></th>
                        <th style={{ width: '10%' }}>DOB <span className="pointer"></span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => {
                            return (
                                <tr key={employee.name.first + "-" + employee.name.last}>
                                    <td >{
                                        <img
                                            src={employee.picture.medium}
                                            alt={"profile image for " + employee.name.first + " " + employee.name.last}
                                            className="img-responsive"
                                        />
                                    }
                                    </td>
                                    <td>{employee.name.first} {employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>
                                    <td>{(employee.dob.date).split('T')[0]}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}


export default Table;





