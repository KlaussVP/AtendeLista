import React, { useEffect, useState } from 'react';
import EachListContainer from './Shared/EachListContainer';
import Title from './Shared/Title';
import Table from './Shared/Table';
import { FaUser } from 'react-icons/fa';
import Loading from './Shared/Loading';
import axios from 'axios';

export default function PeopleList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.post("https://swapi-graphql.netlify.app/.netlify/functions/index", {
    query: `
      query {
        allPeople {
          people {
            id,
            name,
            height,
            gender,
            species {
              name,
              language,
            },
            homeworld {
              name,
            }
          }
        }
      }    
    `,
  })
  .then((response) => setPeople(response.data.data.allPeople.people));
  },[]);

  return(
    <EachListContainer>
      <Title>
        <div><FaUser /></div>
        <h1>Pessoas</h1>
      </Title>
      <Table>
        <ul>
          <li>Nome</li>
          {people.length !== 0 ? people.map((p) => <li key={p.id}>{p.name}</li>) : <Loading />}
        </ul>
        <ul>
          <li>Altura (m)</li>
          { people.length !== 0 
            ? people.map((p) => {
              if (p.height === null) {
                return <li key={p.id}>-</li>
              } else {
                return <li key={p.id}>{p.height}</li>
              }
            }) 
            : <Loading />}
        </ul>
        <ul>
          <li>Gênero</li>
          { people.length !== 0 
            ? people.map((p) => {
              if (p.gender === "male") {
                return <li key={p.id}>Masculino</li>
              } else if (p.gender === "female") {
                return <li key={p.id}>Feminino</li>
              } else if (p.gender === "hermaphrodite") {
                return <li key={p.id}>Hermafrodita</li>
              } else {
                return <li key={p.id}>{p.gender}</li>
              }
            }) 
            : <Loading />}
        </ul>
        <ul>
          <li>Espécie</li>
          { people.length !== 0 
            ? people.map((p) => {
              if (p.species === null) {
                return <li key={p.id}>-</li>
              } else if (p.species.name === "Human") {
                return <li key={p.id}>Humano</li>
              } else {
                return <li key={p.id}>{p.species.name}</li>
              }
            }) 
            : <Loading />}
        </ul>
        <ul>
          <li>Planeta natal</li>
          { people.length !== 0 
            ? people.map((p) => {
              if (p.homeworld.name === "unknown") {
                return <li key={p.id}>Desconhecido</li>
              } else {
                return <li key={p.id}>{p.homeworld.name}</li>
              }
            }) 
            : <Loading />}
        </ul>
        <ul>
          <li>Idioma</li>
          { people.length !== 0 
            ? people.map((p) => {
              if (p.species === null || p.species.language === "n/a") {
                return <li key={p.id}>-</li>
              } else if (p.species.language === "unknown") {
                return <li key={p.id}>Desconhecido</li>
              } else {
                return <li key={p.id}>{p.species.language}</li>
              }
            }) 
            : <Loading />}
        </ul>
      </Table>
    </EachListContainer>
  );
}
