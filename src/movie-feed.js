import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Movies from "./movies";


const MovieFeed = () => {
    const [movies, setMovies] = useState([
        {
            Title: "Movie 1",
            ReleasedDate: "2010",
            Rating: "",
            Poster: "https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg",
            Reviews:[
                {Name: "Austin Atkinson", Review:"This is a Test"},
                {Name: "Kaitlin Atkinson", Review:"Really bad review"}
        ]
        },
        {
            Title: "Movie 2",
            ReleasedDate: "2011",
            Rating: "",
            Poster: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",
            Reviews:[]
        },
        {
            Title: "Movie 3",
            ReleasedDate: "2012",
            Rating: "",
            Poster: "https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg",
            Reviews:[]
        },
    ])
    
    return(
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                <Movies movies={movies}/>
            </div>
        </div>
    )

}

export default MovieFeed;