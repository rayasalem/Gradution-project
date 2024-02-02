import React from 'react';
import { useParams } from 'react-router-dom';
import Certificate from './certifcate';

interface CertificatePageProps {}

const CertificatePage: React.FC<CertificatePageProps> = () => {
  const { projectName = 'Default Project', recipientName = 'Default Recipient' } = useParams();

  
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();

  const certificateProps = {
    projectName,
    recipientName,
    issuedDate: `${day}/${month}/${year}`,
  };

  return <Certificate {...certificateProps} />;
};

export default CertificatePage;