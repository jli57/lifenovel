import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Advertisements = () => {
  return (
    <div className="advertisements homepage-side-section">
      <h1>Advertisements</h1>
      <ul>
        <li>
          <a href="http://a.co/d/5POIgbT" title="Pusheen">
            <img className="ad-image" src="https://images-na.ssl-images-amazon.com/images/I/81o-fxiF1hL._UX679_.jpg" />
            <span>Buy a Pusheen Beanie!</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Advertisements; 