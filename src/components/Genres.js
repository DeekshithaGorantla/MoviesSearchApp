import React, { useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';

const Genres = ({
  selectedGenres,
  genres,
  setSelectedGenres,
  setGenres,
  type,
  setPage
}) => {
  const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres,genre]);
    setGenres(genres.filter((g)=>g.id !== genre.id));
    setPage(1);
  };
  const handleRemove=(genre)=>{
    setSelectedGenres(selectedGenres.filter((selected)=> selected.id !== genre.id));
    setGenres([...genres,genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en`
    );
    setGenres(data.genres);
  };

  console.log(genres);

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]); // Set genres to an empty array
    };
  }, []);

  return (
    <div style={{ padding: '6px 0' }}>
      {selectedGenres && selectedGenres.map((genre) => (
        <Chip key={genre.id} label={genre.name}  variant="outlined" style={{margin:2,backgroundColor:"white"}} size='small' color='primary' clickable onDelete={()=>handleRemove(genre)}/>
      ))}
      {genres.map((genre) => (
        <Chip key={genre.id} label={genre.name}  variant="outlined" style={{margin:2,backgroundColor:"white"}} size='small' clickable onClick={()=>handleAdd(genre)} />
      ))}
    </div>
  );
};

export default Genres;
