import React, { useEffect } from 'react';
declare global {
    interface Window {
      SEC: any[];
    }
  }
const SphereEngineCompilersWidget: React.FC = () => {
  const SEC_HTTPS = true;
  const SEC_BASE = "compilers.widgets.sphere-engine.com";
  const widgetHash = "9b35c701c47b6959d0c2b4564c4e01a3";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
    script.id = "sphere-engine-compilers-jssdk";

    document.body.appendChild(script);

    window.SEC = window.SEC || [];
    window.SEC.length = 0;
    window.SEC.push({
      widget: widgetHash,
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sec-widget" data-widget="9b35c701c47b6959d0c2b4564c4e01a3"></div>
  );
};

export default SphereEngineCompilersWidget;
