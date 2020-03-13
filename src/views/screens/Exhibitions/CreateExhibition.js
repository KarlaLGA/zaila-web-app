import React from "react";

import CreateExhibitionForm from "components/Exhibition/CreateExhibitionForm";

const CreateExhibition = () => {
  return (
    <div className="create-artwork">
      <div className="section-header">
        <h1>Create Exhibition</h1>
      </div>
      <CreateExhibitionForm />
    </div>
  );
};

export default CreateExhibition;
