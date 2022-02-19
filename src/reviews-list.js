import React from "react";

const Review = (props) => {
    return(
        <>
            <div>{props.content.Name} - {props.content.Review}</div>
        </>
    )
}

export default Review;