import { useState, useMemo } from 'react';

export const useRouteFilters = (routes) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRoutes = useMemo(() => {
    return routes.filter(route => {
      const matchesSearch = route.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           route.ubicacion.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || route.categoria === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || route.dificultad === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [routes, searchTerm, selectedCategory, selectedDifficulty]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedRegion('all');
    setShowFilters(false);
  };

  return {
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
    filteredRoutes,
    clearFilters
  };
};
