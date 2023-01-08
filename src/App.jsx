import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {

  const url = "http://www.omdbapi.com/?apikey=65046271";
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useState(() => {
    callApi();
  }, []);

  async function callApi(title) {
    let _url = `${url}&s=${title}`;
    await fetch(_url)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.Search);
        console.log(result);
      });
  }
  const temp = {};
  return (
    <>
      <div className="search">
        <div className="searchBar">
          <input
            className="input"
            placeholder={searchTerm == "" ? "search here.." : searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={() => callApi(searchTerm)}>
            <i class="lni lni-search-alt searchIcon"></i>
          </button>
        </div>
      </div>
      {/* //posters */}
      <div className="Searchresult">
        {movies.length <= 0 ? (
          <div>no data available</div>
        ) : (
          movies.map((e) => <MovieCard data={e} />)
        )}
      </div>
    </>
  );
}

export default App;
