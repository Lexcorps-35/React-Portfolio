import React, { useState, useEffect } from 'react';

const words = [
  " Frontend Developer.",
  " Web Developer.",
  " Code Lover.",
  " Tech Enthusiast."
];

const TypeWriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      !reverse
    ) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <h2 className="text-4xl font-semibold text-red-500 mt-4 text-shadow-red-400 text-shadow-lg">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h2>
  );
};

export default TypeWriter;
