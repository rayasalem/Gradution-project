import React, { useState, useEffect } from 'react';
import ModalBitsEnd from './ModalBitsEnd';

const BitsLessonEnd: React.FC = () => {
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
      <ModalBitsEnd open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BitsLessonEnd;
