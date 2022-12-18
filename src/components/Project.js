import React,{useState} from 'react'

function Project(){
  const [isLoaded, setIsLoaded] = false;
  const [error, setError] = "";
  const [repos, setRepos] = {};

  useState(() => {
    searchRepositories();
  }, []);

  //this function is used to retrieve information about the user's github repositories
  const searchRepositories = (username) => {
    fetch('/api/github/repoinfo')
      .then(res => res.json())
      .then(
        (result) => {
          setRepos(result);
          setIsLoaded(true);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })
  }

  //making sure the information have been retrieved before displaying them
  if (isLoaded) {
    //Display a Not found error in case there is no repositories found
    if (repos.message === "Not Found" || repos.length === 0) {
      return (
        <div className='user-card'>
          <p>No repositories found</p>
        </div>
      )
    } else {
      return (
        <div>
          {repos.filter((repo, idx) => idx < 5).map(repo => (//limits to five repositories
            <a href={repo.html_url} target="_blank" key={repo.id} rel="noreferrer">
              <div className='repo-card'>
                <div className='details-container'>
                  <table>
                    <tbody>
                      <tr>
                        <td className='td-left'>Repo name:</td>
                        <td className='td-right'>{repo.name}</td>
                      </tr>
                      <tr>
                        {repo.description !== null ? <td className='td-left'>Description:</td> : ''}
                        {repo.description !== null ? <td className='td-right'>{repo.description}</td> : ''}
                      </tr>
                      <tr>
                        <td className='td-left'>Creation date:</td>
                        <td className='td-right'>{repo.created_at}</td>
                      </tr>
                      <tr>
                        {repo.language !== null ? <td className='td-left'>Language:</td> : ''}
                        {repo.language !== null ? <td className='td-right'>{repo.language}</td> : ''}
                      </tr>
                      <tr>
                        <td className='td-left'>Last commit date:</td>
                        <td className='td-right'>{repo.updated_at}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </a>
          ))}
        </div>
      );
    }
  } else {
    return <></>;
  }
}

export default RepositoryList;