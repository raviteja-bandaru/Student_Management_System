import React, { useEffect, useState} from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


export default function Home() {
  const [students, setStudents] = useState([]);

  const {htNo} = useParams()

  useEffect(()=> {
    loadStudent();
  },[]);

  const loadStudent=async()=>{
    const result = await axios.get("http://localhost:5000/getAll");
    setStudents(result.data);
  };

  const deleteStudent = async(htNo) => {
      await axios.delete(`http://localhost:5000/delete/${htNo}`)
      loadStudent()
    }   
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow table-info table-striped table-hover table-bordered">
    <thead class="table-dark">
    <tr>
      <th scope="col">HT NO</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map((student, index)=>(
        <tr>
          <td>{student.htNo}</td>
          <td>{student.name}</td>
          <td>{student.course}</td>
          <td>{student.phNo}</td>
          <td>
            <Link className="btn btn-primary mx-2" to={`/viewStudent/${student.htNo}`}>View</Link>
            <Link className="btn btn-success mx-2" to={`/editStudent/${student.htNo}`}>Edit</Link>
            <button className="btn btn-danger mx-2" onClick={()=> deleteStudent(student.htNo)}>Delete</button>
          </td>
        
        </tr>

      ))
    }
  

  </tbody>
</table>
        </div>
    </div>
  )
}
