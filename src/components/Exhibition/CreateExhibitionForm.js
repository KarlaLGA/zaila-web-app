import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { create } from "services/zaila-api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import UploadImage from "components/Exhibition/UploadImage";

const CreateExhibitionForm = () => {
  const { image } = useSelector(state => state.exhibition);
  const categories = useSelector(state => state.exhibition.categories);
  const newExhibition = {
    museumId: 1,
    name: "",
    description: "",
    imageURL: {},
    startDate: Date,
    endDate: Date,
    categoryId: 1,
    completionBadgeId: 1,
    completionXp: 10,
    quest: ""
  };

  const [exhibition, setExhibition] = useState(newExhibition);

  useEffect(() => {
    setExhibition({
      ...exhibition,
      imageURL: image
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleExhibition = () => {
    console.log(exhibition);

    create("exhibition", { exhibition: exhibition })
      .then(data => {
        console.log(`Create exhibition from ${data}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="exhibition-form form single-view">
      <div className="general-information">
        <div className="detail">
          <label htmlFor="name">Exhibition Title</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            onChange={e =>
              setExhibition({
                ...exhibition,
                name: e.target.value
              })
            }
          />
        </div>

        <div className="detail duration">
          <p>Duration</p>
          <div className="options-detail">
            <DatePicker
              className="input"
              selected={new Date()}
              onChange={date =>
                setExhibition({
                  ...exhibition,
                  startDate: date
                })
              }
            />
            <p>To</p>
            <DatePicker
              className="input"
              style={{ width: "200px" }}
              selected={new Date()}
              onChange={date =>
                setExhibition({
                  ...exhibition,
                  endDate: date
                })
              }
            />
          </div>
        </div>

        <div className="detail">
          <label htmlFor="description">Exhibition Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="input"
            onChange={e =>
              setExhibition({
                ...exhibition,
                description: e.target.value
              })
            }
          ></textarea>
        </div>
      </div>
      <div className="additional-information">
        <UploadImage />

        <div className="exhibition-category detail">
          <p>Exhibition Category</p>
          <div className="categories">
            {categories.map(category => (
              <div className="category caption" key={category.categoryId}>
                <img
                  alt={`category ${category.categoryName}`}
                  src={category.image}
                  className={
                    exhibition.categoryId === category.categoryId
                      ? "category-icon selected"
                      : "category-icon"
                  }
                  id={category.categoryId}
                  onClick={e =>
                    setExhibition({
                      ...exhibition,
                      categoryId: Number(e.target.id)
                    })
                  }
                />
                {category.categoryName}
              </div>
            ))}
          </div>
        </div>

        <div className="detail">
          <label htmlFor="quest">Quest</label>
          <input
            type="text"
            name="quest"
            id="quest"
            className="input"
            onChange={e =>
              setExhibition({
                ...exhibition,
                quest: e.target.value
              })
            }
          />
        </div>
      </div>

      <div onClick={handleExhibition} className="add">
        <img src="/assets/icons/save-border.svg" alt="save icon" />
        Save
      </div>
    </div>
  );
};

export default CreateExhibitionForm;
