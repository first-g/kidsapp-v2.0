import React from 'react'
import './Main.css'

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
                        <div className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Жаныбарлар</div>
                        </div>
                        <div className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Тест</div>
                        </div>
                        <div className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Тамгалар</div>
                        </div>
                        <div className="main__button">
                            <div className="main__button-image"></div>
                            <div className="main__button-text">Жомоктор</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main