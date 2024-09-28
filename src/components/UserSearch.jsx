import React, { useState } from 'react';
import axios from 'axios';

function UserSearch() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter GitHub username" 
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h3>{userData.login}</h3>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
        </div>
      )}
    </div>
  );
}

export default UserSearch;
