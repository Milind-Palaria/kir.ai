import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('');
  const [isIframe, setIsIframe] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
    // console.log(event.clientX)

    const element = document.elementFromPoint(event.clientX, event.clientY);  

    if (element && element.tagName === 'IFRAME') {
      setIsIframe(true);
      return;
    }

    setIsIframe(false);

    if (element) {
      const cursorStyle = window.getComputedStyle(element).getPropertyValue('cursor');
      if (cursorStyle === 'pointer') {
        setCursorType('pointer');
      } else {
        setCursorType('');
      }
    } else {
      setCursorType('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    !isIframe && (
      <div
        className={`custom-cursor ${cursorType}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    )
  );
};

export default CustomCursor;
