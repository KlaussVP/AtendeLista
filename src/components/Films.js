import React from 'react';
import EachListContainer from './Shared/EachListContainer';
import Title from './Shared/Title';
import Table from './Shared/Table';
import Loading from './Shared/Loading';
import Authorship from './Shared/Authorship';
import { FaFilm } from 'react-icons/fa';
import { gql, useQuery } from '@apollo/client';

export default function FilmsList() {
  const filmData = gql`
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
  `;
  const { loading, error, data } = useQuery(filmData);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return(
    <EachListContainer>
      <Title >
        <div><FaFilm /></div>
        <h1>Filmes</h1>
      </Title>
      <Table>
        <ul>
          <li>Título original</li>
          {data.allFilms.films.map((f) => <li key={f.id}>{f.title}</li>)}
        </ul>
        <ul>
          <li>Episódio</li>
          {data.allFilms.films.map((f) => <li key={f.id}>{f.episodeID}</li>)}
        </ul>
        <ul>
          <li>Estréia</li>
          {data.allFilms.films.map((f) => <li key={f.id}>{f.releaseDate}</li>)}
        </ul>
        <ul>
          <li>Direção</li>
          {data.allFilms.films.map((f) => <li key={f.id}>{f.director}</li>)}
        </ul>
      </Table>
      <Authorship />
    </EachListContainer>
  );
}
