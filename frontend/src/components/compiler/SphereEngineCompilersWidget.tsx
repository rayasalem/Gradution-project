import React, { useEffect } from 'react';

declare global {
  interface Window {
    SEC: {
      ready: (callback: () => void) => void;
      init: (config: { widget: string; debug?: boolean }) => void;
      push: (config: any) => void; 
    };
  }
}

const SphereEngineCompilersWidget: React.FC = () => {
  const SEC_HTTPS = true;
  const SEC_BASE = "compilers.widgets.sphere-engine.com";
  const widgetHash = "9e1e25c224b32a941cccc468d284e148";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
    script.id = "sphere-engine-compilers-jssdk";
    script.onload = () => {

     console.log('Sphere Engine Compilers script loaded.');
  console.log('window.SEC:', window.SEC);
      if (window.SEC && typeof window.SEC.push === 'function') {
        window.SEC.ready(() => {
          console.log('window.SEC:', window.SEC);    
                window.SEC.push({
            widget: widgetHash,
            debug: true,
          });
        });
      } else {
        console.error("Sphere Engine Compilers script is loaded, but window.SEC is not valid.");
      }
    };

    script.onerror = () => {
      console.error("Failed to load the Sphere Engine Compilers script");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sec-widget" data-widget={widgetHash}></div>
  );
};

export default SphereEngineCompilersWidget;
