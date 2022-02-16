import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {


    const navigate = useNavigate();

    const { id } = useParams();

    // alert(id)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");

    function saveUser() {
        //   console.log({name,email,username,phone,website})
        let data = { name, email, username, phone, website }

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        fetch(`http://localhost:3003/users/${id}`, requestOptions)
            .then((result) => {
                result.json().then((resp) => {
                    console.log("response", resp)

                    navigate("/");
                })

            })

    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);

        //    console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setUsername(result.data.username)
        setPhone(result.data.phone)
        setWebsite(result.data.website)


    };

    useEffect(() => {
        loadUser()
    }, []);






    return (
        <div> <h1>Add Users</h1>
            <div className='container col-lg-6 card mt-5 p-5 '>

                <div className='form-group col-lg-6'>
                    <input type="text" required className="form-control" aria-describedby="emailHelp" placeholder="Name" name="name" value={name} onChange={e => { setName(e.target.value) }} />
                </div><br />
                <div className='form-group col-lg-6'>
                    <input type="text" className="form-control" placeholder="Username" value={username} name="username" onChange={e => { setUsername(e.target.value) }} />
                </div><br />
                <div className='form-group col-lg-6'>
                    <input type="email" className="form-control" placeholder="email" value={email} name="email" onChange={e => { setEmail(e.target.value) }} />
                </div><br />
                <div className='form-group col-lg-6'>
                    <input type="number" className="form-control" placeholder="Phone" value={phone} name="phone" onChange={e => { setPhone(e.target.value) }} />
                </div><br />
                <div className='form-group col-lg-6'>
                    <input type="text" className="form-control" placeholder="Website Name" name="phone" value={website} onChange={e => { setWebsite(e.target.value) }} />
                </div><br />

                <button onClick={saveUser} className='btn btn-info col-lg-3 '>Edit User</button>


            </div>

        </div>



    );

}

export default EditUser;