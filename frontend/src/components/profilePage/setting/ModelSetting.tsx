import React, { useState, useEffect } from 'react';
import ProfileSettings from './ProfileSetting';

type Props = {}

const ModelSetting = (props: Props) => {
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
        <ProfileSettings open={isModalOpen} onClose={closeModal}/>
    </div>
  )
}

export default ModelSetting