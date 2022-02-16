import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function View() {

    const [user, setUser] = useState({

        name: "",
        email: "",
        username: "",
        phone: "",
        website: "",

    });

    const { id } = useParams();

    useEffect(() => {
        loaduser();

    }, []);

    const loaduser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);

        setUser(res.data);
    };


    return (

        <div>

            <h1>view</h1>
            <div className='container col-lg-6 card mt-5 p-5 '>



                <ul>
                    <li>Name:{user.name}</li>
                    <li> Email:{user.email}</li>
                    <li>User Name:{user.username}</li>
                    <li>Phone Number:{user.phone}</li>
                    <li> Website:{user.website}</li>
                </ul>





            </div>



        </div>


    )


}
export default View;