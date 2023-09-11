import React from 'react'
import './Loader.css'
import loader from '../../assets/loader.json'
import Lottie from 'react-lottie-player'

const Loader = () => {
    return (
        <div className='loader'>
            <Lottie
                play
                loop
                mode="normal"
                animationData={loader}
                style={{ width: '300px', height: '300px' }}
            />
            <h2>КYТYП ТУРУНУЗ...</h2>
        </div>
    )
}

export default Loader