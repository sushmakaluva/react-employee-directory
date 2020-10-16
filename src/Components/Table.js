import React from 'react';


function Table(props) {
    const { employees } = props;
    // console.log("Employee List", employees);
    return (
        <div className="datatable">
            <table
                className={`table table-bordered table-striped table-hover table-condensed`}
                style={{
                    padding: 25,
                }} >
                <thead className="thead-dark">
                    <tr>
                        <th style={{ width: '10%' }}>Image <span style={{ cursor: "pointer" }} onClick={props.onClick.bind(this, 'image')} className="pointer"></span></th>
                        <th style={{ width: '10%' }}>Name <span style={{ cursor: "pointer" }} onClick={props.onClick.bind(this, 'name')} className="pointer">&#9660;</span></th>
                        <th style={{ width: '20%' }}>Phone <span style={{ cursor: "pointer" }} onClick={props.onClick.bind(this, 'phone')} className="pointer">&#9660;</span></th>
                        <th style={{ width: '20%' }}>Email <span style={{ cursor: "pointer" }} onClick={props.onClick.bind(this, 'email')} className="pointer">&#9660;</span></th>
                        <th style={{ width: '10%' }}>DOB <span style={{ cursor: "pointer" }} onClick={props.onClick.bind(this, 'dob')} className="pointer">&#9660;</span></th>
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





