import React, { useEffect, useState } from 'react'
import axios from "axios";
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenres';

const Series = () => {
    const [page,setPage]=useState(1);
    const [content,setContent]=useState([]);
    const [numOfPages,setNumOfPages]=useState();
    const [selectedGenres,setSelectedGenres]=useState([]);
    const [genres,setGenres]=useState([]);
     const genreforURL=useGenres(selectedGenres);

    const fetchMovies=async()=>{
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}&with_genres=${genreforURL}`);
     
    setContent(data.results);
    setNumOfPages(data.total_pages);
    }
    useEffect(()=>{
       fetchMovies();
    },[page,genreforURL])
  return (
    <div>
          <span className="pageTitle">Tv Series</span>
          <Genres type="tv" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} 
       genres={genres} 
       setGenres={setGenres}
       setPage={setPage}/>
       <div className="trending">
          {content && content.map((c)=><SingleContent key={c.id} poster={c.poster_path} title={c.title || c.name} date={c.release_date} 
          media_type="tv" vote_average={c.vote_average}  />)}
      </div>
      {numOfPages>1 && (
             <CustomPagination setPage={setPage} numOfPages={50}/>
      )}
    </div>
  )
}

export default Series
