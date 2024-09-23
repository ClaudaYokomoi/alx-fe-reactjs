import axios from 'axios';

// Function to fetch user data from the GitHub API with advanced search
export const fetchUserData = async (username, location, minRepos) => {
  const query = `${username} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`;
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
