// This is the file where we interact with the GitHub API.
// You can add functions here to fetch repositories, user data, etc.
// For example, you might want to fetch a list of repositories for a user.
// Example function to fetch user repositories (uncomment and implement as needed):
/*
import axios from 'axios';
export async function fetchUserRepositories(username: string) {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
}
*/
import axios from 'axios';

// Fetch repositories from your FastAPI backend instead of GitHub directly
// Assumes your backend is running at http://localhost:8000 in development
// and at your production API URL in production

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

const fetchRepos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/github/repos`, {
      timeout: 8000, // 8 second timeout for faster failure
    });
    // The backend returns { repos: [...] }
    return response.data.repos || [];
  } catch (error) {
    console.error('Error fetching repositories from backend:', error);
    throw error; // Throw error for better error handling
  }
};

export { fetchRepos };