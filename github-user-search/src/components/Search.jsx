import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    const data = await fetchUserData({ username, location, minRepos });
    setUsers(data);
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search by username"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>


      {loading ? (
        <h1>Loading...</h1>
      ) : (
        users.length && (
          <div className="mt-4 space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold">{user.login}</h2>
                  <p>Location: {user.location || "N/A"}</p>
                  <p>Repositories: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Search;
