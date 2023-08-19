import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mt-3 navbar bg-secondary">
    <Link className="navbar-brand mb-0 h3" to={"/"} >STUDENT MANAGEMENT SYSTEM</Link>
    <button className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline btn-warning" to ="/addStudent">Add Student</Link>
  </div>
</nav>



    </div>
  )
}
