import React from 'react'
import Movie from './Movie';
// import { useGlobalContext } from './context'
import Search  from './Search';
import Footer from './Footer';


const Home = () => {
//  const {movie}=useGlobalContext();
    return (
      <>
        <Search/>
        <Movie/>
        <Footer/>
      </>
    
  )
}

export default Home;