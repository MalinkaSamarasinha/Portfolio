import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 60, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // skip the animation for people who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length);
      return;
    }

    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  const typing = count > 0 && count < text.length;

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        className="cursor"
        aria-hidden="true"
        style={{ visibility: typing ? 'visible' : 'hidden' }}
      />
      <span aria-hidden="true" style={{ visibility: 'hidden' }}>
        {text.slice(count)}
      </span>
    </span>
  );
}