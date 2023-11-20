import React from 'react';

interface TextSlideProps {
  text: React.ReactNode;
}

const TextSlide: React.FC<TextSlideProps> = ({ text }) => {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div>{React.cloneElement(text as React.ReactElement)}</div>
    </div>
  );
};

export default TextSlide;
