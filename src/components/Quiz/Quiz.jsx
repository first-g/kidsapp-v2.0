import React from 'react'
import './Quiz.css'
import { BsDoorOpenFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Quiz = () => {
    return (
        <div className='quiz'>
            <div className="quiz__container">
                <div className="quiz__body">
                    <div className="quiz__circle"></div>
                    <div className="quiz__content-section">
                        <div className="quiz__title">
                            <Link to='/' className="leave">
                                <BsDoorOpenFill />
                            </Link>
                            <h1>Тест</h1>
                        </div>
                        <div className="quiz__cards">
                            {/* Здесь будут карточки */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz