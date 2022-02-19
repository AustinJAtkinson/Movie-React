import React from "react";
import Rating from "./rating";
import Review from "./reviews-list";
import ReviewForm from "./review-form";

const Movies = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
            <div key={index} className="card" style={{minwidth: "18rem"}}>
				<img className='card-img-top' src={movie.Poster} alt='movie'></img>
                <h5 className="card-title">{movie.Title}</h5>
                <div className="card-body">
                    <div>Please rate the Movie: <br></br>
                        <Rating ratingUpdater={props.ratingUpdater} index={index}/>
                    </div>
                    <br></br>
                    {movie.Reviews && movie.Reviews.length? (<ul className="list-group">Reviews:</ul>):""}
                    {movie.Reviews.map((review, index) => (
                        <li key={index} className="list-group-item">
                                <Review content={review}/>
                        </li>))}
                    <div>Submit a Review:
                        <ReviewForm movieIndex={index} reviewUpdater={props.reviewUpdater}/>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
};

export default Movies;