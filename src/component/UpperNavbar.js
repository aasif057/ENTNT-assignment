import React from 'react'
import { Link } from 'react-router-dom'

const UpperNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary uppernavbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ERP Software</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/product">Product Management</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/orders">Order Management</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/calender">Order Calender</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UpperNavbar
