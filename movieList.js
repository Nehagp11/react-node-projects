import React, { useState }  from "react";
import "./index.css";

function MovieList() {
  const [movieList, setMovieList] = useState();
  const [input, setInput] = useState('');

  function searchMovie(){
    let api_url = 'https://jsonmock.hackerrank.com/api/moviesdata?';
      fetch(api_url + 'Year=' + input).then((res)=> res.json()).then((resp) => {
        if(resp && resp.data){
          setMovieList(resp.data);
          console.log(resp.data);
        }
      }
      );
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" value={input} onChange={(e)=> setInput(e.target.value)} className="large" placeholder="Enter Year eg 2015" data-testid="app-input"/>
        <button className="" onClick={()=>searchMovie()} data-testid="submit-button">Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {movieList && movieList.map((item) => <li key={item.Title}> {item.Title}</li>)}
      </ul>
      {movieList && movieList.length === 0 &&
      <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Result Found</div>}
    </div>
  );
}

export default MovieList;