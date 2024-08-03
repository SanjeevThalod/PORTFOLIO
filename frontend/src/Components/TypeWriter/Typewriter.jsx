import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ phrases }) => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayPhrase, setDisplayPhrase] = useState('');

  useEffect(() => {
    let typingTimeout;

    if (currentIndex < phrases.length) {
      typingTimeout = setTimeout(() => {
        const fullPhrase = phrases[currentIndex];
        setDisplayPhrase((prev) => fullPhrase.slice(0, prev.length + 1));
      }, 100);

      if (displayPhrase === phrases[currentIndex]) {
        typingTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          setDisplayPhrase('');
        }, 2000);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, displayPhrase, phrases]);

  return <span className="typewriter-line">{displayPhrase}</span>;
};

export default Typewriter;
