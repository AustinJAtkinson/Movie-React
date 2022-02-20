import React from "react";

const Rating = (props) => {

    const ratingValues = [
        {value: "oneStar", displayValue: "1"},
        {value: "twoStar", displayValue: "2"},
        {value: "threeStar", displayValue: "3"},
        {value: "fourStar", displayValue: "4"},
        {value: "fiveStar", displayValue: "5"},
    ]

    const handleUpdate = props.ratingUpdater;

    return(
        <>
            {ratingValues.map((rating, i )=> 
                <div key={i} className="form-check form-check-inline">
                    <input onClick={() =>handleUpdate(props.index, rating.value)} type='radio' id={`${props.index}-${rating.value}`} name={`${props.index}-rating`} value={rating.value}/> {rating.displayValue}
                </div>
            )}
        </>
    )
};

export default Rating;