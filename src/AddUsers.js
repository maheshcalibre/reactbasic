import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function AddUsers() {


    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");

    function saveUser() {
        //  console.log({name,email,username,phone,website})
        let data = { name, email, username, phone, website }

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        fetch("http://localhost:3003/users", requestOptions)
            .then((result) => {
                result.json().then((resp) => {
                    console.log("response", resp)

                    navigate("/");
                })

            })

    }
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

                <button onClick={saveUser} className='btn btn-info col-lg-3 '>Add User</button>


            </div>

        </div>



    );

}

export default AddUsers;