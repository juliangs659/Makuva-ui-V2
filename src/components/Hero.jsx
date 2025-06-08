import React, { useState, useEffect } from 'react';
import '../assets/styles/Hero.css';

const backgroundImages = [
  'https://atlasnetviaxcom.blob.core.windows.net/atlas-multimedia-hpvuy/SURAMERICA/COLOMBIA/Cartagena/Cartagena%20DESTINO4.jpg',
  'https://atlasnetviaxcom.blob.core.windows.net/atlas-multimedia-hpvuy/SURAMERICA/COLOMBIA/Cartagena/Cartagena%20DESTINO1.webp',
  'https://atlasnetviaxcom.blob.core.windows.net/atlas-multimedia-hpvuy/SURAMERICA/COLOMBIA/bogota/Bogota.jpg',
  'https://atlasnetviaxcom.blob.core.windows.net/atlas-multimedia-hpvuy/SURAMERICA/COLOMBIA/Cartagena/Cartagena3.jpg',
];

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [currentBgIndex, setCurrentBgIndex] = useState(() => Math.floor(Math.random() * backgroundImages.length));
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
  if (backgroundImages.length === 0) return;
  const interval = setInterval(() => {
    setCurrentBgIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000);
  return () => clearInterval(interval);
}, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (destination.trim()) {
      window.location.href = `/planner?destination=${encodeURIComponent(destination)}`;
    }
  };

  return (
    <div className="hero-modern-container">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg${currentBgIndex === index ? ' active' : ''}`}
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${img})` }}
        />
      ))}
      <div className="hero-modern-content">
        <h1>
          Descubre tu <span className="gradient-text">Makuva</span>
        </h1>
        <p>Explora senderos únicos y crea aventuras inolvidables</p>
        <form className={`hero-search${isSearchExpanded ? ' expanded' : ''}`} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="📍 ¿A dónde te lleva tu Makuva?"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              onFocus={() => setIsSearchExpanded(true)}
              onBlur={() => setIsSearchExpanded(false)}
            />
            <button type="submit" className='hero-search-button'>
              🔍 Explorar
            </button>
        </form>
        <div className="hero-links">
          <button type="button" className="hero-link">
            🧭 Destinos populares <span className="chevron">›</span>
          </button>
          <button type="button" className="hero-link">
            ☀️ Rutas recomendadas <span className="chevron">›</span>
          </button>
          <button type="button" className="hero-link">
            🏔️ Experiencias únicas <span className="chevron">›</span>
          </button>
        </div>
      </div>
      <div className="hero-gradient-bottom" />
    </div>
  );
}