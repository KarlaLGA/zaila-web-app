import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const ConfirmDeleteArtwork = () => {
  return (
    <Popup trigger={<button>Yes</button>} modal>
      {close => (
        <div className="modal">
          <div className="header-popup">Deleted artwork</div>
          <div className="content">This artifact has been deleted</div>
          <div className="delete-action">
            <Link to="/artifacts">
              <button onClick={close}>Ok</button>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ConfirmDeleteArtwork;
