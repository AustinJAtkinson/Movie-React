import React from "react";

const ReviewForm = () => {
    return(
        <form>
            <div className="form-row">
                   <input type="text" className="form-control" placeholder="Name"/>
                    <textarea type="text" className="form-control" placeholder="Review"/>
                    <button className="btn btn-dark form-control">Submit</button>
            </div>
        </form>
    )
}



export default ReviewForm