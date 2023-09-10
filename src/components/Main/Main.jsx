import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='main'>
            <div className="main__container">
                <div className="main__body">
                    <div className="main__left-section">
                        <div className="main__circle"></div>
                        <div className="main__image"></div>
                    </div>

                    <div className="main__right-section">
                        <Link to='zhan' className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Жаныбарлар</div>
                        </Link>
                        <Link to='test' className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Тест</div>
                        </Link>
                        <Link to='tamgalar' className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Тамгалар</div>
                        </Link>
                        <Link to='zhomoktor' className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Жомоктор</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main