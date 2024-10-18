import React, { useState, createContext, useContext } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './App.css';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';

// Create and export the ModalContext
export const ModalContext = createContext();

//Movies Lists
const trendingMovies = [
  { id: 1, title: "Inception", image: "https://via.placeholder.com/300x400?text=Inception" },
  { id: 2, title: "The Matrix", image: "https://via.placeholder.com/300x400?text=The+Matrix" },
  { id: 3, title: "Avatar", image: "https://via.placeholder.com/300x400?text=Avatar" },
  { id: 4, title: "Interstellar", image: "https://via.placeholder.com/300x400?text=Interstellar" },
  { id: 5, title: "Shutter Island", image: "https://via.placeholder.com/300x400?text=Shutter+Island" },
  { id: 6, title: "The Dark Knight", image: "https://via.placeholder.com/300x400?text=The+Dark+Knight" },
  { id: 7, title: "Fight Club", image: "https://via.placeholder.com/300x400?text=Fight+Club" },
  { id: 8, title: "Pulp Fiction", image: "https://via.placeholder.com/300x400?text=Pulp+Fiction" },
  { id: 9, title: "The Godfather", image: "https://via.placeholder.com/300x400?text=The+Godfather" },
  { id: 10, title: "The Shawshank Redemption", image: "https://via.placeholder.com/300x400?text=The+Shawshank+Redemption" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(trendingMovies);
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  // Handle search filtering
  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredMovies(
      trendingMovies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="App p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Video Streaming Platform</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          Login / Sign-Up
        </button>
      </header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />

      <h2 className="text-xl font-semibold my-4">Trending Movies</h2>
      <Slider {...settings}>
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="p-2">
            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded" />
            <h3 className="text-lg text-center mt-2">{movie.title}</h3>
          </div>
        ))}
      </Slider>

      <Modal isOpen={isOpen} />
    </div>
  );
}

function AppWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <App />
    </ModalContext.Provider>
  );
}

export default AppWrapper;
