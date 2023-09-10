import React from 'react'
import './Animals.css'
import { BsDoorOpenFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Animals = () => {
    return (
        <div className='animals'>
            <div className="animals__container">
                <div className="animals__body">
                    <div className="animals__circle"></div>
                    <div className="animals__content-section">
                        <div className="animals__title">
                            <Link to='kidsapp-v2.0/' className="leave">
                                <BsDoorOpenFill />
                            </Link>
                            <h1>Жаныбарлар</h1>
                        </div>
                        <div className="animals__cards">
                            {/* Здесь будут карточки */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animals