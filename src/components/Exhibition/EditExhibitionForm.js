import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { update } from "services/zaila-api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import UploadImage from "components/Exhibition/UploadImage";

const EditExhibitionForm = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [editExhibition, setEditExhibition] = useState(props.exhibition);

  const {
    name,
    description,
    imageURL,
    startDate,
    endDate,
    categoryId,
    quest
  } = editExhibition;

  let image = useSelector(state => state.exhibition.image) || imageURL;
  const categories = useSelector(state => state.exhibition.categories);

  useEffect(() => {
    setEditExhibition({
      ...editExhibition,
      imageURL: image
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleExhibition = () => {
    let endpoint = `exhibition/${editExhibition.exhibitionId}`;
    update(endpoint, {
      exhibition: editExhibition
    })
      .then(data => {
        history.push("/dashboard/exhibitions");
        dispatch({ type: "EMPTY_IMAGE_EXHIBITION" });
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
            value={name}
            type="text"
            name="name"
            id="name"
            className="input"
            onChange={e =>
              setEditExhibition({
                ...editExhibition,
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
              selected={new Date(startDate)}
              onChange={date =>
                setEditExhibition({
                  ...editExhibition,
                  startDate: date
                })
              }
            />
            <p>To</p>
            <DatePicker
              className="input"
              style={{ width: "200px" }}
              selected={new Date(endDate)}
              onChange={date =>
                setEditExhibition({
                  ...editExhibition,
                  endDate: date
                })
              }
            />
          </div>
        </div>

        <div className="detail">
          <label htmlFor="description">Exhibition Description</label>
          <textarea
            value={description}
            name="description"
            id="description"
            cols="30"
            rows="15"
            className="input"
            onChange={e =>
              setEditExhibition({
                ...editExhibition,
                description: e.target.value
              })
            }
          ></textarea>
        </div>
      </div>
      <div className="additional-information">
        <UploadImage image={image} />

        <div className="exhibition-category detail">
          <p>Exhibition Category</p>
          <div className="categories">
            {categories.map(category => (
              <div className="category caption" key={category.categoryId}>
                <img
                  alt={`category ${category.categoryName}`}
                  src={category.imageURL}
                  className={
                    categoryId === category.categoryId
                      ? "category-icon selected"
                      : "category-icon"
                  }
                  id={category.categoryId}
                  onClick={e =>
                    setEditExhibition({
                      ...editExhibition,
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
            value={quest}
            type="text"
            name="quest"
            id="quest"
            className="input"
            onChange={e =>
              setEditExhibition({
                ...editExhibition,
                quest: e.target.value
              })
            }
          />
        </div>
      </div>

      <button onClick={handleExhibition} className="add">
        Save
      </button>
    </div>
  );
};

export default EditExhibitionForm;
