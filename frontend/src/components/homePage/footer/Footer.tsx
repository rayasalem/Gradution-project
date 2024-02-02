import React from 'react';
import LinkSection from './linkSection/LinkSection';
import MediaSection from './media/MediaSection';
import StaticFooter from './staticFooter/StaticFooter';
const Footer = () => {
  return (
    <div> 
       <LinkSection/>
       <MediaSection/>
      <StaticFooter/>
    </div>
  );
};

export default Footer;
