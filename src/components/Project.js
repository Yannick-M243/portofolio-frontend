import React, { useEffect, useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function Project() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState({});

  //this function is used to retrieve information about the user's github repositories
  const searchRepositories = () => {
    fetch(process.env.REACT_APP_API_URL)
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
  const changeDateFormat = (inputDate, format) => {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace("MM", month.toString().padStart(2, "0"));

    //replace the year
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2, "0"));

    return format;
  }

  useEffect(() => {
    searchRepositories();
  }, []);

  //making sure the information have been retrieved before displaying them
  if (isLoaded) {
    let result = repos.message.includes("limit exceeded");
    console.log(result);
    if (error === null && result === false) {
      //Display a Not found error in case there is no repositories found
      if (repos.message === "Not Found" || repos.length === 0) {
        return (
          <section id="project">
            <div className='container'>
              <p>No repositories found</p>
            </div>
          </section>
        )
      } else {
        return (
          <section id="project">
            <h2>Projects</h2>
            <div className='container'>
              {repos.map(repo => (
                <div className='repo-card' key={repo.id} data-aos="zoom-in">
                  <div className='heading-container'>
                    <h4>{repo.name}</h4>
                    <span className='date'>{changeDateFormat(repo.created_at, 'dd/MM/yyyy')}</span>
                  </div>
                  <div className='details-container'>
                    {repo.description !== null ? <p>{repo.description}</p> : ''}
                    <p className={"language " + repo.language}>{repo.language}</p>
                    {/*repo.updated_at*/}
                  </div>
                  <div className='card-footer'>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      <span><FontAwesomeIcon icon={faLink} /></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );/*
      
      return (
        <section id="project">
          <h2>Projects</h2>
          <div className='container'>
                <div className='repo-card'>
                  <div className='heading-container'>
                    <h4>Invoice Maker</h4>
                    <span className='date'>12/05/2022</span>
                  </div>
                  <div className='details-container'>
                    <p>This is an invoice calculator system that can be used for anym small business for free</p>
                    <p className={"language " + "JavaScript"}>JavaScript</p>
                </div>
                    <div className='card-footer'>
                  <a href="#" target="_blank" rel="noreferrer">
                    <span><FontAwesomeIcon icon={faLink} /></span>
                  </a>
                </div>
                </div>
          </div>
        </section>
      );*/
      }
    } else {
      return (
        <section id="project">
          <h2>Projects</h2>
          <div className='container'>
            <p className='error pj-error'>There was an error retrieving repositories </p>
            <p>{error}</p>
          </div>
        </section>
      )
    }
  } else {
    return (
      <section id="project">
        <h2>Projects</h2>
        <div className='loader-container'>
          <FadeLoader color="rgba(30, 143, 255, 0.478)" />
        </div>
      </section>
    )
  }
}

export default Project;