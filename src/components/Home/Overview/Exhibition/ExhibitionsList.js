import React from "react";

import ExhibitionItem from "components/Home/Overview/Exhibition/ExhibitionItem";

const ExhibitionsList = () => {
  const data = [
    {
      exhibitionName: "Exhibition A",
      duration: "02/12 - 08/15",
      imageURL: "https://i.picsum.photos/id/1002/200/90.jpg"
    },
    {
      exhibitionName: "Exhibition B",
      duration: "01/09 - 11/27",
      imageURL: "https://i.picsum.photos/id/1026/200/90.jpg"
    }
  ];
  return (
    <div>
      {data.map(exhibition => (
        <ExhibitionItem exhibition={exhibition} />
      ))}
    </div>
  );
};

export default ExhibitionsList;
