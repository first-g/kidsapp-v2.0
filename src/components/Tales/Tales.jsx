import React from 'react'
import './Tales.css'
import { BsDoorOpenFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Tales = () => {
    return (
        <div className='tales'>
            <div className="tales__container">
                <div className="tales__body">
                    <div className="tales__circle"></div>
                    <div className="tales__content-section">
                        <div className="tales__title">
                            <Link to='kidsapp-v2.0/' className="leave">
                                <BsDoorOpenFill />
                            </Link>
                            <h1>Жомоктор</h1>
                        </div>
                        <div className="tales__cards">
                            {/* Здесь будут карточки */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tales