import React from "react";

function MovieCard({data}) {
    let placeHolder ="https://pavan6476252.github.io/assets/placeholder.jpg";
  return (

    <div className="movieCard">
      <img className="moviePoster" src={data.Poster ==="N/A" ?placeHolder : data.Poster }/>
   <div className="details">

      <p className="title">{data.Title}</p>
      <p className="category">{data.Type}</p>
      <p className="year">Year : {data.Year}</p>
      <p className="imdbId">imdbID : {data.imdbID}</p>
   </div>
    </div>
  );
}

export default MovieCard;
