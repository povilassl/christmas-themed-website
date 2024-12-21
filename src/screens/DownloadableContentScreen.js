import React, { useEffect } from "react";

function DownloadableContentScreen() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/test.pdf";
    link.download = "test.pdf";
    link.click();
  };

  useEffect(() => {
    handleDownload();
  }, []);

  return (
    <div className="gift-container">
      <h1 className="gift-title">Merry Christmas!</h1>
      <p className="gift-text">
        If the download does not start automatically, click the button below:
      </p>
      <button className="download-button" onClick={handleDownload}>
        📥 Download Document 📥
      </button>
    </div>
  );
}

export default DownloadableContentScreen;
