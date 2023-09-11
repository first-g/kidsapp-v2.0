import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const UrlError = () => {
    return (
        <div className='error'>
            <h1>Ушундай барак жок =(</h1>
            <Link to='/'>Артка</Link>
        </div>
    )
}

export default UrlError