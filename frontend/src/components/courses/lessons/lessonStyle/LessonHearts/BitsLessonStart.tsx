import React, { useState, useEffect } from 'react';
import ModalBitsStart from './ModalBitsStart';

const BitsLessonStart: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const shouldShowModal = true; 
    if (shouldShowModal) {
      openModal();
    }
  }, []); 

  return (
    <div>
      <ModalBitsStart open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BitsLessonStart;
