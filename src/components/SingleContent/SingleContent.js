 import React from 'react'
 import { img_200, unavailable } from '../../config/config'
 import "./SingleContent.css";
 import Badge from '@mui/material/Badge';
 const SingleContent = ({id,
    poster,
    title,
    date,
    media_type,
    vote_average,}) => {
   return (
     <div className='media'>
      <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"}>
    </Badge>
       <img className='poster' src={poster?`${img_200}/${poster}`: unavailable} alt={title}/>
       <b className='title'>{title}</b>
       <span>
        {media_type==='tv'?"TV Series":"Movie"}
       </span>
       <span className='subTitle'>{date}</span>
     </div>
   )
  }
 
 export default SingleContent
 
