import React from 'react';
import Search from './containers/Search'
import Books from './containers/Books'
import './home.css'


const Home = () => (
  <div className="body">
    <div className="container">
      <Search />
      <Books />
    </div> 
  </div>
)
export default Home;