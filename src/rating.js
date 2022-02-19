import React from "react";

const Rating = (props) => {

    const ratingValues = [
        {value: "oneStar", displayValue: "1"},
        {value: "twoStar", displayValue: "2"},
        {value: "threeStar", displayValue: "3"},
        {value: "fourStar", displayValue: "4"},
        {value: "fiveStar", displayValue: "5"},
    ]

    return(
        <>
            {ratingValues.map((rating, index )=> 
                <div key={index} className="form-check form-check-inline">
                    <input type='radio' id={rating.value} name='rating' value={rating.value}/> {rating.displayValue}
                </div>
            )}
        </>
    )
};

export default Rating;