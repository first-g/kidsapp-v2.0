import './Quiz.css'
import { BsDoorOpenFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {  useState } from 'react';

import ready from './sound/ready.mp3'
import useSound from 'use-sound';
const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [play] = useSound(ready);

    const questions = [
        {   num:1,
            questionText: 'Асмандан түшкөн сууну эмне деп атайсың?',
            answerOptions: [
                { answerText: 'Жамгыр', isCorrect: true},
                { answerText: 'Каар', isCorrect: false },
                { answerText: 'Мөндүр', isCorrect: false },
                { answerText: 'Шамаал', isCorrect: false },

            ],
        },
        {
            num:2,
            questionText: 'Жаздан кийин жылдын кайсы мезгили келет?',
            answerOptions: [
                { answerText: 'Кыш', isCorrect: false },
                { answerText: 'Күз', isCorrect: false },
                { answerText: 'Жай', isCorrect: true },
                { answerText: 'Жаз  ', isCorrect: false },

            ],
        },
        {
            num:3,
            questionText: 'Полициянын номерин билесинби?',
            answerOptions: [
                { answerText: '123', isCorrect: false },
                { answerText: '104', isCorrect: false },
                { answerText: '102', isCorrect: true },
                { answerText: '103', isCorrect: false },

            ],
        },
        {
            num:4,
            questionText: 'Кыргыз тилинде канча тамга бар?',
            answerOptions: [
                { answerText: '26', isCorrect: false },
                { answerText: '30', isCorrect: true },
                { answerText: '33', isCorrect: false },
                { answerText: '33', isCorrect: false },

            ],
        },
        {
            num:4,
            questionText: 'Суу өмурдун ...?',
            answerOptions: [
                { answerText: 'Азыгы', isCorrect: false },
                { answerText: 'Булагы', isCorrect: true },
                { answerText: 'Сакчысы', isCorrect: false },
                { answerText: 'Оюнчугу', isCorrect: false },

            ],
        },

    ];

    const Click = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = current + 1;
        if (nextQuestion < questions.length) {
            setCurrent(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const restart = () => {
        setCurrent(0);
        setScore(0);
        setShowScore(false);
    };
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



                            <div className="quiz__main">
                                {showScore ? (
                                    <div className='quiz__result' onClick={play}>
                                        <p className='quiz__count'>Сиз {score} тура жооп бердиниз!</p>
                                        <button className='return' onClick={restart}  >Кайталап өтүү</button>
                                    </div>
                                ) : (
                                    <div className='quiz__content'>
                                        <p className='quiz__countTwo'>
                                            {current + 1}/{questions.length}
                                        </p>
                                        <p className='quiz__text'><span>{questions[current].num}.</span>{questions[current].questionText}</p>
                                        <div className='quiz__answers'>
                                            {questions[current].answerOptions.map((answerOption, index) => (
                                                <button className='dt' key={index} onClick={() => Click(answerOption.isCorrect)}>
                                                    {answerOption.answerText} 
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz