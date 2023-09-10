import React from 'react'
import './Alphabet.css'
import { BsDoorOpenFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Alphabet = () => {
    return (
        <div className='alphabet'>
            <div className="alphabet__container">
                <div className="alphabet__body">
                    <div className="alphabet__circle"></div>
                    <div className="alphabet__content-section">
                        <div className="alphabet__title">
                            <Link to='kidsapp-v2.0/' className="leave">
                                <BsDoorOpenFill />
                            </Link>
                            <h1>Тамгалар</h1>
                        </div>
                        <div className="alphabet__cards">
                            {/* Здесь будут карточки */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alphabet