import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap'
import React from 'react';
import axios from 'axios';


function Home() {
  const navigate = useNavigate();

  // const handleClick = () => navigate("/addusers");
  // const editpage = () => navigate("/edituser/{item.id}");

  const [Users, fetchUsers] = useState([])


  // const props = {id: "2"}

  const getData = () => {
    fetch('http://localhost:3003/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res.reverse())
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteUser = async id => {

    await axios.delete(`http://localhost:3003/users/${id}`);
    getData();

  }



  return (

    <div>

      <Container >

        <Button className='btn btn-info col-lg-3 mt-5' onClick={() => navigate("/addusers")}>Add </Button><br /><br />

        <table className="table table-hover table-bordered shadow-lg table-responsive">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>email</th>
              <th>Phone</th>


            </tr>
          </thead>
          <tbody >
            {
              Users.map((item, i) =>

                <tr key={i} >
                  <td>{i + 1}</td>
                  <td >{item.name}</td>
                  <td >{item.email}</td>
                  <td >{item.phone}</td>

                  <td ><Button onClick={() => navigate(`/view/${item.id}`)}  >View</Button></td>
                  <td ><Button onClick={() => navigate(`/edituser/${item.id}`)} className='btn btn-success'>Edit</Button></td>
                  {/* <Link as={Link} to="/edituser/${item.id}">Edit</Link> */}
                  <td ><Button onClick={() => deleteUser(item.id)} className='btn btn-danger'>Delete</Button></td>


                </tr>


              )
            }

          </tbody>
        </table>




      </Container>

    </div>

  );
}

export default Home;