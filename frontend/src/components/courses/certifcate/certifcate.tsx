import React, { useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

interface CertificateProps {
  projectName: string;
  recipientName: string;
  issuedDate: string;
}

const CertificateContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #ffffff; /* White background for formality */
  font-family: 'Pacifico', cursive;
`;

const CertificateContent = styled.div`
  margin-top: 120px;
  flex: 1;
  padding: 20px;
  border: 4px solid #008000; /* Change to Dark Green */
  text-align: center;
  background-color: #f2f2f2; /* Light Gray for formality */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const CertificateImage = styled.img`
  height: 20%; /* Adjust the height as needed */
  width: 40%;
  margin-left: 20px; /* Adjust the spacing between image and content */
`;

const CertificateText = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  color: black; /* Change to Dark Green */
`;

const Signature = styled.div`
  font-size: 18px;
  font-family: 'Typography';
  margin-left: 0px;
`;

const DevLOOM = styled.img`
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
  color: #008000; /* Change to Dark Green */
`;

const CertificateButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: 4px solid #008000; /* Change to Dark Green */
  cursor: pointer;
  display: block;
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
    <>
      <CertificateContainer>
        <CertificateContent ref={certificateRef}>
          <DevLOOM></DevLOOM>
          <CertificateImage src="/images/logo.png" alt="Signature" />
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
    </>
  );
};

export default Certificate;