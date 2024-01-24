// src/components/Certificate.tsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

interface CertificateProps {
  projectName: string;
  recipientName: string;
  issuedDate: string;
}

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #c4e17f; /* Light Green */
  font-family: 'Pacifico', cursive;
`;

const CertificateContent = styled.div`
  padding: 20px;
  border: 4px solid #4caf50; /* Dark Green */
  border-radius: 20px;
  text-align: center;
  background-color: #fff;
  width: 60%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CertificateText = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Signature = styled.div`
  font-size: 18px;
  font-family: 'Pacifico', cursive;
  margin-top: 24px;
`;

const DevLOOM = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
  color: #c4e17f
`;

const CertificateButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: white; /* DevLOOM Orange */
  color: black;
  border: none;
  cursor: pointer;
`;

const Certificate: React.FC<CertificateProps> = ({ projectName, recipientName, issuedDate }) => {
  const certificateRef = useRef(null);

  const downloadCertificate = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate.png';
        link.click();
      });
    }
  };

  return (
    <CertificateContainer>
      <CertificateContent ref={certificateRef}>
        <DevLOOM>DevLOOM</DevLOOM>
        <div>{projectName} Certificate</div>
        <CertificateText>This is to certify that</CertificateText>
        <CertificateText>
          <strong>{recipientName}</strong>
        </CertificateText>
        <CertificateText>
          has successfully completed the {projectName} course on {issuedDate}.
        </CertificateText>
        <CertificateText>From DevLOOM</CertificateText>
      </CertificateContent>
      <CertificateButton onClick={downloadCertificate}>Download Certificate</CertificateButton>
    </CertificateContainer>
  );
};

export default Certificate;
