import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover rounded-t-lg shadow-md" 
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>
      
      {/* Additional details like ingredients and instructions */}
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Ingredients:</h2>
        <ul className="list-disc ml-5 mt-2">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Instructions:</h2>
        <p className="mt-2">Step-by-step instructions for the recipe...</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
