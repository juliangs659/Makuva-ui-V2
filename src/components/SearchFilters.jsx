import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faFilter,
  faMountain,
  faWater,
  faTree,
  faCompass,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedRegion,
  setSelectedRegion,
  showFilters,
  setShowFilters
}) {
  const categories = [
    { id: 'all', name: 'Todas', icon: faCompass },
    { id: 'mountain', name: 'Montaña', icon: faMountain },
    { id: 'water', name: 'Acuática', icon: faWater },
    { id: 'forest', name: 'Bosque', icon: faTree },
    { id: 'cultural', name: 'Cultural', icon: faUsers }
  ];

  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-input-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar aventuras, ubicaciones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button 
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FontAwesomeIcon icon={faFilter} />
          Filtros
        </button>
      </div>

      {/* Categories */}
      <div className="categories-section">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <FontAwesomeIcon icon={category.icon} />
            {category.name}
          </button>
        ))}
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="filters-panel">
          <div className="filter-group">
            <label>Dificultad</label>
            <select 
              value={selectedDifficulty} 
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Región</label>
            <select 
              value={selectedRegion} 
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="all">Todas las regiones</option>
              <option value="andina">Región Andina</option>
              <option value="caribe">Región Caribe</option>
              <option value="amazonia">Amazonía</option>
              <option value="pacifico">Región Pacífico</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
