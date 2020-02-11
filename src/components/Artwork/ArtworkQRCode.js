import React from 'react';

import QRCode from 'qrcode.react';

const ArtworkQRCode = (props) => {

    const sensorId = props.sensorId.toString();

    return (
        <div>

            <p>Here is your artwork's QR code</p>

            <QRCode value={sensorId}
            id={sensorId}
            size={290}
            level={"H"}
            includeMargin={true} />
            
        </div>
    )
}

export default ArtworkQRCode;