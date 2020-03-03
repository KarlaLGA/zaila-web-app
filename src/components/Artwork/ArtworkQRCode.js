import React from "react";

import QRCode from "qrcode.react";

const ArtworkQRCode = props => {
  const sensorId = props.sensorId.toString();

  const handleCodeDownload = () => {
    const canvas = document.getElementById(sensorId);
    const pngURL = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngURL;
    downloadLink.download = `${sensorId}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="download-button">
      <button onClick={handleCodeDownload}>Download QR Code</button>

      <QRCode
        value={sensorId}
        id={sensorId}
        size={290}
        level={"H"}
        includeMargin={true}
        className="qr-code"
      />
    </div>
  );
};

export default ArtworkQRCode;
