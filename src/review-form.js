import React from "react";

const ReviewForm = (props) => {

    const handleUpdate = props.reviewUpdater;
    const getNameValue = () => document.getElementById(`${props.movieIndex} - name`).value;
    const getReviewValue = () => document.getElementById(`${props.movieIndex} - review`).value;

    return(
        <form>
            <div className="form-row">
                <input id={`${props.movieIndex} - name`} type="text" className="form-control" placeholder="Name"/>
                <textarea id={`${props.movieIndex} - review`} type="text" className="form-control" placeholder="Review"/>
                <button className="btn btn-dark form-control" onClick={() => handleUpdate(props.movieIndex, getNameValue(), getReviewValue())}>Submit</button>
            </div>
        </form>
    )
}



export default ReviewForm