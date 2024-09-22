import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to home or another route after deletion
  };

  return <button onClick={handleClick}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
