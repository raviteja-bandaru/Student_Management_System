import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditStudent() {

    let navigate = useNavigate();

    const {htNo} = useParams()

    const [student,setStudent]=useState({
        name:"",
        course:"",
        addr:"",
        phNo:""
    });
    const {name,course,addr,phNo} = student

    const onInputChange=(e)=>{
        setStudent({ ...student, [e.target.name]: e.target.value });

    };


    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/editStudent/${htNo}`,student)
        navigate("/")
    };

    const loadStudent = async ()=>{
        const result = await axios.get(`http://localhost:5000/editStudent/${htNo}`)
        setStudent(result.data)
    }


  return (
    <div className="container">
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Student Data</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-lable'>Name</label>
                        <input type={'text'} className='form-control' placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Course' className='form-lable'>Course</label>
                        <input type={'text'} className='form-control' placeholder='Enter Your Course' name='course' value={course} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Address' className='form-lable'>Address</label>
                        <input type={'text'} className='form-control' placeholder='Enter Your Address' name='addr' value={addr} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Phone Number' className='form-lable'>Phone Number</label>
                        <input type={'number'} className='form-control' placeholder='Enter Your Phone Number' name='phNo' value={phNo} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}


