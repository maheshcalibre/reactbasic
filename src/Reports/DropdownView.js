import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Form, Table } from 'react-bootstrap';
import axios from 'axios';
import'../Home.css';


function DropdownView() {

    const [users, setUser] = useState([]);
    const [Singleuser, setSingleUser] = useState([]);

    const tableRef = useRef(null)



    useEffect(function () {



        //  tableRef.current.style.display="none"
        // axios.get('http://localhost:3003/users?designation=manager')
                axios.get('http://localhost:3003/users')

            .then((response) => setUser(response.data))
            .then((error) => console.log(error));

    }, []);

    const onclick = (e) => {
        // alert(e.target.value)

        axios.get('http://localhost:3003/users/' + e.target.value)
            .then((response) => setSingleUser(response.data))
            .then((error) => console.log(error));



    }

    return (
        <div>
           
            <div className='container col-lg-5  p-5'>
                <Form.Select aria-label="Default select example" onChange={onclick}>
                    <option value="0">Select User</option>
                    {
                        users.map(user =>

                            <option key={user.id} value={user.id} >{user.name}</option>

                        )
                    }
                </Form.Select>
            </div>
            <div className='container '>

                <div className='table-horiz-scroll'>
                <Table  className='table  table-hover  ' ref={tableRef} >
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Company Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{Singleuser.id}</td>
                                <td>{Singleuser.name}</td>
                                <td>{Singleuser.email}</td>
                                <td>{Singleuser.phone}</td>
                                <td>{Singleuser.name}</td>

                            </tr>
                        }
                    </tbody>

                </Table>

                </div>
            </div>



        </div>
    );
}

export default DropdownView