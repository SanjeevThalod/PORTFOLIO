import React, { useState, useEffect } from 'react';

const Typewriter = ({ phrases, period = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = index % phrases.length;
    const fullText = phrases[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setIndex((prevIndex) => prevIndex + 1);
      setDelta(500);
    }
  };

  return <span className="txt-rotate">{text}</span>;
};

export default Typewriter;
