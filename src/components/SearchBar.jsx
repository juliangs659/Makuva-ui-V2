import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faMapLocationDot,
  faStar,
  faPlus,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ 
  searchQuery, 
  setSearchQuery, 
  placeholder, 
  results, 
  onSelectResult 
}) {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 2);
  };

  const handleSelectResult = (result) => {
    onSelectResult(result);
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
          onFocus={() => searchQuery.length > 2 && setShowResults(true)}
        />
      </div>

      {showResults && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map(result => (
              <div 
                key={result.id} 
                className="search-result-item"
                onClick={() => handleSelectResult(result)}
              >
                <div className="result-image">
                  <img src={result.imagen} alt={result.nombre} />
                </div>
                <div className="result-info">
                  <h4>{result.nombre}</h4>
                  <p>
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    {result.ubicacion}
                  </p>
                  <div className="result-meta">
                    <span className="result-type">{result.tipo}</span>
                    <span className="result-rating">
                      <FontAwesomeIcon icon={faStar} />
                      {result.rating}
                    </span>
                  </div>
                </div>
                <button className="add-button">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            ))
          ) : (
            <div className="no-results">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>No se encontraron resultados</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
