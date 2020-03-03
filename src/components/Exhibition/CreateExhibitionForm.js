import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {create} from "services/zaila-api";
import UploadImage from "components/Exhibition/UploadImage";

const CreateExhibitionForm = () => {
    const {image} = useSelector(state => state.exhibition);

    const newExhibition = {
        museumId: 1,
        name: "",
        description: "",
        imageURL: {},
        startDate: Date,
        endDate: Date,
        categoryId: 1,
        completionBadgeId: 1,
        completionXp: 10
    };

    const categories = [
        {
            type: "art",
            id: 1
        }, {
            type: "science",
            id: 2
        }, {
            type: "photography",
            id: 3
        }, {
            type: "nature",
            id: 4
        }
    ]

    const [exhibition,
        setExhibition] = useState(newExhibition);

    useEffect(() => {
        setExhibition({
            ...exhibition,
            imageURL: image
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);

    const handleExhibition = () => {
        console.log(exhibition);

        create("exhibition", {exhibition: exhibition}).then(data => {
            console.log(`Create exhibition from ${data}`);
        }).catch(error => {
            console.log(error);
        });
    };

    console.log(exhibition);

    return (
        <div className="exhibition-form">
            <h2>Exhibition Information</h2>
            <label htmlFor="name">
                Exhibition Title
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => setExhibition({
                    ...exhibition,
                    name: e.target.value
                })}/>
            </label>

            <div className="duration">
                <p>Duration</p>

                <label htmlFor="start">
                    From
                    <input
                        type="date"
                        name="start"
                        id="start"
                        onChange={e => setExhibition({
                        ...exhibition,
                        startDate: e.target.value
                    })}/>
                </label>

                <label htmlFor="end">
                    To
                    <input
                        type="date"
                        name="duration-end"
                        id="duration-end"
                        onChange={e => setExhibition({
                        ...exhibition,
                        endDate: e.target.value
                    })}/>
                </label>
            </div>

            <label htmlFor="description"/>
            Exhibition Description
            <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={e => setExhibition({
                ...exhibition,
                description: e.target.value
            })}></textarea>

            <UploadImage/>

            <div className="exhibition-category">
                <p>Exhibition Category</p>
                <div className="categories">
                    {categories.map(category => (
                        <div
                            className={exhibition.categoryId === category.id
                            ? "category selected"
                            : "category"}
                            key={category.id}
                            id={category.id}
                            onClick={e => setExhibition({
                            ...exhibition,
                            categoryId: Number(e.target.id)
                        })}>
                            {category.type}
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleExhibition}>Save</button>
        </div>
    );
};

export default CreateExhibitionForm;
