import { useState } from 'react';
import ExplorarHeader from '../components/ExplorarHeader';
import SearchFilters from '../components/SearchFilters';
import RoutesGrid from '../components/RoutesGrid';
import LoadMoreButton from '../components/LoadMoreButton';
import { useRouteFilters } from '../hooks/useRouteFilters';
import { rutasDestacadas } from '../data/rutas';
import '../assets/styles/Explorar.css';

export default function Explorar() {
  const [loadingMore, setLoadingMore] = useState(false);
  
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    selectedRegion,
    setSelectedRegion,
    showFilters,
    setShowFilters,
    filteredRoutes
  } = useRouteFilters(rutasDestacadas);

  const handleLoadMore = () => {
    setLoadingMore(true);
    // Simular carga de más rutas
    setTimeout(() => {
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <div className="explorar-container">
      <ExplorarHeader filteredCount={filteredRoutes.length} />
      
      <SearchFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <RoutesGrid rutas={filteredRoutes} />

      <LoadMoreButton 
        onClick={handleLoadMore}
        loading={loadingMore}
      />
    </div>
  );
}
