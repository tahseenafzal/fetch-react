import { useState, useEffect, Suspense } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {
    const getRepos = async () => {
      const data = await fetch(
        "https://api.github.com/users/tahseenafzal/repos"
      );
      const result = await data.json();
      setRepos(result);
      console.log(repos, "Repositories");
    };
    getRepos();
  }, []);
  return (
    <div>
      <h1>GitHub Repos</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
        <ul>
          {repos.map((repo) => (
            <li key={repo.di}>{repo.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App;
