import React from 'react'
import Button from '../../../components/Button'
import './NotFound.css'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="not-found-section">
                <h1 className="error">404</h1>
                <div className="error-page">Ooops!!! The page you are looking for is not found</div>
                {/* <Button className="back-home" value="Back to home"/> */}
                <NavLink className='back-home' to={"/"} >Back to home</NavLink>
            </div>
        </div>
    )
}

export default NotFound
