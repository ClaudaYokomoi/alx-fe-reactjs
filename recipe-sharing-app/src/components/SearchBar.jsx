import React from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
  // Get the setSearchTerm function from the Zustand store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  // Handle input changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Update search term in the Zustand store
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleInputChange} // Update search term on change
    />
  );
};

export default SearchBar;
