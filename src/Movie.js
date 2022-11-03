import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

const Movie = () => {
  const {movie}=useGlobalContext();
  return (
    <>
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
      {movie.map((i)=>{
        const {Title,Poster, imdbID}= i;
        return <NavLink key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h1>
                 {Title}
                </h1>
                <img src={Poster} alt="Poster not found"  />

              </div>
            </div>
        </NavLink>
    })}
      </div>
    </section>

  </>
  )
}

export default Movie;
