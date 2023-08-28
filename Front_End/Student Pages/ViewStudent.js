import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStudents() {

    const [students,setStudents]=useState({
        name:"",
        course:"",
        addr:"",
        phNo:""
    });

    const {htNo}=useParams();

    useEffect(()=>{
        loadStudents();
    }, []);

    const loadStudents =async ()=>{
        const result = await axios.get(`http://localhost:5000/get/${htNo}`);
        setStudents(result.data);
    };

  return (        
        <div className="container">
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Students Deatils</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Deatils of Students HT-No
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name:</b>
                                    {students.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Course:</b>
                                    {students.course}
                                </li>
                                <li className='list-group-item'>
                                    <b>Address:</b>
                                    {students.addr}
                                </li>
                                <li className='list-group-item'>
                                    <b>Phone Number:</b>
                                    {students.phNo}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Home</Link>

                </div>
            </div>
        </div>
    )
}

