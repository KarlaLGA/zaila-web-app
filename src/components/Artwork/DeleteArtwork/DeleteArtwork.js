import React from 'react';
import Popup from 'reactjs-popup';

import ConfirmDeleteArtwork from './ConfirmDeleteArtwork';

const DeleteArtwork = () => {
    return (
        <Popup trigger={ <button>Delete artwork</button>} modal>
            {close => (
                <div className="modal">
                    <div className="header-popup">Delete artwork</div>
                    <div className="content">Are you sure you want to delete de artwork?</div>
                    <div className="delete-action">
                        <ConfirmDeleteArtwork onClick={ close }/>
                        <button onClick={ close }>No</button>
                    </div>
                </div>
            )}

        </Popup>
    )
}

export default DeleteArtwork;
