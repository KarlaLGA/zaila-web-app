import React, { useState } from "react";
import { useSelector } from "react-redux";
import Moment from "moment";

import EditExhibitionForm from "components/Exhibition/EditExhibitionForm";

const SingleExhibition = props => {
  let singleExhibition = props.singleExhibition;

  const start = new Moment(singleExhibition.exhibition.startDate);
  const end = new Moment(singleExhibition.exhibition.endDate);
  const categories = useSelector(state => state.exhibition.categories);

  const startExhibition = start.format("LL");
  const endExhibition = end.format("LL");

  const [exhibitionEdit, setExhibitionEdit] = useState(false);

  const handleEdit = () => {
    setExhibitionEdit(true);
  };
  return (
    <div>
      {!exhibitionEdit ? (
        <div className="exhibition-view single-view">
          <div className="general-information">
            <div className="detail">
              <p>Exhibition Title</p>
              <p className="information">{singleExhibition.exhibition.name}</p>
            </div>
            <div className="detail">
              <p>Duration</p>
              <p className="information">
                {startExhibition} to {endExhibition}
              </p>
            </div>
            <div className="detail">
              <p>Exhibition Description </p>
              <p>{singleExhibition.exhibition.description}</p>
            </div>
          </div>
          <div className="additional-information">
            <div className="image">
              <img
                src={singleExhibition.exhibition.imageURL}
                alt="exhibition"
              />
            </div>

            <div className="exhibition-category detail">
              <p>Exhibition Category</p>
              <div className="categories">
                {categories.map(category => (
                  <div className="category" key={category.categoryId}>
                    <img
                      src={category.imageURL}
                      alt={`category ${category.categoryName}`}
                      className={
                        singleExhibition.exhibition.exhibition_category
                          .categoryId === category.categoryId
                          ? "category-icon selected"
                          : "category-icon"
                      }
                      id={category.categoryId}
                    />
                    {category.categoryName}
                  </div>
                ))}
              </div>
            </div>

            <div className="detail">
              <p>Quest</p>
              <p className="information">
                {singleExhibition.exhibition.quest ||
                  "No quest related to this exhibition"}
              </p>
            </div>
          </div>

          <button onClick={handleEdit} className="add">
            Edit
          </button>
        </div>
      ) : (
        <EditExhibitionForm exhibition={singleExhibition.exhibition} />
      )}
    </div>
  );
};
export default SingleExhibition;
