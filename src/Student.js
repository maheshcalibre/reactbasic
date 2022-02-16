import React from "react";


function Student(props) {

// console.log(props)

const {data}= props

    return (
        <div>


            <h1>Hello</h1>
            {data.name}

        </div>
    )
}

export default Student;