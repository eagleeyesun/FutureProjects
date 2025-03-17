import React from 'react'

const MovieCard = ({ movie: { primaryTitle, primaryImage, startYear, numVotes, spokenLanguages, description } }) => {
  return (
    <div className='movie-card m-2'>
        <img src={primaryImage ? primaryImage : "/no-movie.png"} alt="" />
        {/* <div className='text-white text-center mt-3'>{description}</div> */}
        <div className='mt-4'>
            <h3 className='text-indigo-500'>{primaryTitle}</h3>
            <div className='mt-2 flex flex-row items-center flex-wrap gap-2'>
                <div className='rating'>
                    <img src="/star.svg" alt="star" />
                    <p>{numVotes}</p>
                </div>
                <span className='text-slate-100'>•</span>
                <p className='text-stone-500'>{spokenLanguages}</p>
                <span className='text-slate-100'>•</span>
                <p className='text-slate-100'>{startYear}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard