import React from "react";
import "./Alphabet.css";
import a from "./music/er1.mp3";
import b from "./music/er2.mp3";
import v from "./music/er3.mp3";
import g from "./music/er4.mp3";
import a1 from "./music/er5.mp3";
import a2 from "./music/er6.mp3";
import a3 from "./music/er7.mp3";
import a4 from "./music/er8.mp3";
import a5 from "./music/er9.mp3";
import a6 from "./music/er10.mp3";
import a7 from "./music/er11.mp3";
import a8 from "./music/er12.mp3";
import a9 from "./music/er13.mp3";
import a10 from "./music/er14.mp3";
import a11 from "./music/er15.mp3";
import a12 from "./music/er16.mp3";
import a13 from "./music/er17.mp3";
import a14 from "./music/er18.mp3";
import a15 from "./music/er19.mp3";
import a16 from "./music/er20.mp3";
import a17 from "./music/er21.mp3";
import a18 from "./music/er22.mp3";
import a19 from "./music/er23.mp3";
import a20 from "./music/24.mp3";
import a21 from "./music/25.5.mp3";
import a22 from "./music/er25.mp3";
import a23 from "./music/er26.mp3";
import a24 from "./music/er27.mp3";
import a25 from "./music/er28.mp3";
import a26 from "./music/er29.mp3";
import a27 from "./music/er30.mp3";
import a28 from "./music/er31.mp3";
import a29 from "./music/er32.mp3";
import a30 from "./music/er33.mp3";
import a31 from "./music/er34.mp3";
import { BsDoorOpenFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const Alphabet = () => {
  const speak = useCallback(() => {
    const audio = new Audio(a);
    audio.play();
  }, []);
  const speak2 = useCallback(() => {
    const audio = new Audio(b);
    audio.play();
  }, []);
  const speak3 = useCallback(() => {
    const audio = new Audio(v);
    audio.play();
  }, []);
  const speak4 = useCallback(() => {
    const audio = new Audio(g);
    audio.play();
  }, []);
  const speak5 = useCallback(() => {
    const audio = new Audio(a1);
    audio.play();
  }, []);
  const speak6 = useCallback(() => {
    const audio = new Audio(a2);
    audio.play();
  }, []);
  const speak7 = useCallback(() => {
    const audio = new Audio(a3);
    audio.play();
  }, []);
  const speak8 = useCallback(() => {
    const audio = new Audio(a4);
    audio.play();
  }, []);
  const speak9 = useCallback(() => {
    const audio = new Audio(a5);
    audio.play();
  }, []);
  const speak10 = useCallback(() => {
    const audio = new Audio(a6);
    audio.play();
  }, []);
  const speak11 = useCallback(() => {
    const audio = new Audio(a7);
    audio.play();
  }, []);
  const speak12 = useCallback(() => {
    const audio = new Audio(a8);
    audio.play();
  }, []);
  const speak13 = useCallback(() => {
    const audio = new Audio(a9);
    audio.play();
  }, []);
  const speak14 = useCallback(() => {
    const audio = new Audio(a10);
    audio.play();
  }, []);
  const speak15 = useCallback(() => {
    const audio = new Audio(a11);
    audio.play();
  }, []);
  const speak16 = useCallback(() => {
    const audio = new Audio(a12);
    audio.play();
  }, []);
  const speak17 = useCallback(() => {
    const audio = new Audio(a13);
    audio.play();
  }, []);
  const speak18 = useCallback(() => {
    const audio = new Audio(a14);
    audio.play();
  }, []);
  const speak19 = useCallback(() => {
    const audio = new Audio(a15);
    audio.play();
  }, []);
  const speak20 = useCallback(() => {
    const audio = new Audio(a16);
    audio.play();
  }, []);
  const speak21 = useCallback(() => {
    const audio = new Audio(a17);
    audio.play();
  }, []);
  const speak22 = useCallback(() => {
    const audio = new Audio(a18);
    audio.play();
  }, []);
  const speak23 = useCallback(() => {
    const audio = new Audio(a19);
    audio.play();
  }, []);
  const speak24 = useCallback(() => {
    const audio = new Audio(a20);
    audio.play();
  }, []);
  const speak25 = useCallback(() => {
    const audio = new Audio(a21);
    audio.play();
  }, []);
  const speak26 = useCallback(() => {
    const audio = new Audio(a22);
    audio.play();
  }, []);
  const speak28 = useCallback(() => {
    const audio = new Audio(a23);
    audio.play();
  }, []);
  const speak29 = useCallback(() => {
    const audio = new Audio(a24);
    audio.play();
  }, []);
  const speak30 = useCallback(() => {
    const audio = new Audio(a25);
    audio.play();
  }, []);
  const speak31 = useCallback(() => {
    const audio = new Audio(a26);
    audio.play();
  }, []);
  const speak32 = useCallback(() => {
    const audio = new Audio(a27);
    audio.play();
  }, []);
  const speak33 = useCallback(() => {
    const audio = new Audio(a28);
    audio.play();
  }, []);
  const speak34 = useCallback(() => {
    const audio = new Audio(a29);
    audio.play();
  }, []);
  const speak35 = useCallback(() => {
    const audio = new Audio(a30);
    audio.play();
  }, []);
  const speak36 = useCallback(() => {
    const audio = new Audio(a31);
    audio.play();
  }, []);

  return (
    <div className="alphabet">
      <div className="alphabet__container">
        <div className="alphabet__body">
          <div className="alphabet__circle"></div>
          <div className="alphabet__content-section">
            <div className="alphabet__title">
              <Link to="/" className="leave">
                <BsDoorOpenFill />
              </Link>
              <h1>Тамгалар</h1>
            </div>
            <div className="alphabet__cards">
              <div className="qwer">
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak}>А</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak2}>Б</h1>
                </div>
                <div style={{backgroundColor: '#2FEE70'}}>
                  <h1 onClick={speak3}>В</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak4}>Г</h1>
                </div>
                <div style={{backgroundColor: '#2FEE70'}}>
                  <h1 onClick={speak5}>Д</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak6}>Е</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak7}>Ё</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak8}>Ж</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak9}>3</h1>
                </div>
                <div style={{backgroundColor: '#2FEE70'}}>
                  <h1 onClick={speak10}>И</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak11}>Й</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak12}>К</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak13}>Л</h1>
                </div>
                <div style={{backgroundColor: '#2FEE70'}}>
                  <h1 onClick={speak14}>М</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak15}>Н</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak16}>Ң</h1>
                </div>
                <div style={{backgroundColor: '#284FDA'}}>
                  <h1 onClick={speak17}>О</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak18}>Ө</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak19}>П</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak20}>Р</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak21}>С</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak22}>Т</h1>
                </div>
                <div style={{backgroundColor: '#284FDA'}}>
                  <h1 onClick={speak23}>У</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak24}>Ү</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak25}>Ф</h1>
                </div>
                <div style={{backgroundColor: '#284FDA'}}>
                  <h1 onClick={speak26}>Х</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak28}>Ч</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak29}>Ш</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak30}>Щ</h1>
                </div>
                <div style={{backgroundColor: '#284FDA'}}>
                  <h1 onClick={speak31}>Ь</h1>
                </div>
                <div style={{backgroundColor: '#94D9E2'}}>
                  <h1 onClick={speak33}>Ы</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak32}>Ъ</h1>
                </div>
                <div style={{backgroundColor: '#284FDA'}}>
                  <h1 onClick={speak34}>Э</h1>
                </div>
                <div style={{backgroundColor: '#CFDD30'}}>
                  <h1 onClick={speak35}>Ю</h1>
                </div>
                <div style={{backgroundColor: '#7276D9'}}>
                  <h1 onClick={speak36}>Я</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
