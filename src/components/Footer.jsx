import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black mt-[150px] text-white dark:bg-black dark:text-gray-300">
      <div className="container mx-auto py-6">
        <div>
          <div className="mb-4 md:mb-0">
              <p className="text-4xl uppercase text-red-600 font-bold">Movie</p>
          </div>
          <div className="mb-4">
            <ul className="flex space-x-4 items-baseline ">
              <li><Link to="/" className="hover:text-red-400">Home</Link></li>
              <li><Link to="/movies" className="hover:text-red-400">Movies</Link></li>
              <li><Link to="/tv-shows" className="hover:text-red-400">TV Shows</Link></li>
              <li><Link to="/about" className="hover:text-red-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
              <img width={200} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" />
            </ul>
            
          </div>
          
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Movie All rights reserved.  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
