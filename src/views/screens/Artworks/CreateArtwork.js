import React from "react";

import CreateArtworkForm from "components/Artwork/CreateArtworkForm";

const CreateArtwork = () => {
  return (
    <div className="create-artwork">
      <div className="section-header">
        <h1>Create Artwork</h1>
      </div>
      <CreateArtworkForm />
    </div>
  );
};

export default CreateArtwork;
