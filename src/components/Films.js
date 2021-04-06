import React, { useEffect, useState } from 'react';
import EachListContainer from './Shared/EachListContainer';
import Title from './Shared/Title';
import Table from './Shared/Table';
import Loading from './Shared/Loading';
import { FaFilm } from 'react-icons/fa';
import axios from 'axios';

export default function FilmsList() {
  const [films, setFilms] = useState([]);
  
  useEffect(() => {
    axios.post("https://swapi-graphql.netlify.app/.netlify/functions/index", {
    query: `
      query {
        allFilms {
          films {
            id,
            title,
            episodeID,
            releaseDate,
            director
          }
        }
      }    
    `,
  })
  .then((response) => setFilms(response.data.data.allFilms.films));
  },[]);

  return(
    <EachListContainer>
      <Title >
        <div><FaFilm /></div>
        <h1>Filmes</h1>
      </Title>
      <Table>
        <ul>
          <li>Título original</li>
          {films.length !== 0 ? films.map((f) => <li key={f.id}>{f.title}</li>) : <Loading />}
        </ul>
        <ul>
          <li>Episódio</li>
          {films.length !== 0 ? films.map((f) => <li key={f.id}>{f.episodeID}</li>) : <Loading />}
        </ul>
        <ul>
          <li>Estréia</li>
          {films.length !== 0 ? films.map((f) => <li key={f.id}>{f.releaseDate}</li>) : <Loading />}
        </ul>
        <ul>
          <li>Direção</li>
          {films.length !== 0 ? films.map((f) => <li key={f.id}>{f.director}</li>) : <Loading />}
        </ul>
      </Table>
    </EachListContainer>
  );
}
