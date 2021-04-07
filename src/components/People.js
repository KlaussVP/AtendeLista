import React from 'react';
import EachListContainer from './Shared/EachListContainer';
import Title from './Shared/Title';
import Table from './Shared/Table';
import Loading from './Shared/Loading';
import Authorship from './Shared/Authorship';
import { FaUser } from 'react-icons/fa';
import { gql, useQuery } from '@apollo/client';

export default function PeopleList() {
  const peopleData = gql`
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
  `;
  const { loading, error, data } = useQuery(peopleData);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return(
    <EachListContainer>
      <Title>
        <div><FaUser /></div>
        <h1>Pessoas</h1>
      </Title>
      <Table>
        <ul>
          <li>Nome</li>
          {data.allPeople.people.map((p) => <li key={p.id}>{p.name}</li>)}
        </ul>
        <ul>
          <li>Altura (m)</li>
          {  
            data.allPeople.people.map((p) => {
              if (p.height === null) {
                return <li key={p.id}>-</li>
              } else {
                return <li key={p.id}>{p.height}</li>
              }
            })
          }
        </ul>
        <ul>
          <li>Gênero</li>
          { 
            data.allPeople.people.map((p) => {
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
          }
        </ul>
        <ul>
          <li>Espécie</li>
          { 
            data.allPeople.people.map((p) => {
              if (p.species === null) {
                return <li key={p.id}>-</li>
              } else if (p.species.name === "Human") {
                return <li key={p.id}>Humano</li>
              } else {
                return <li key={p.id}>{p.species.name}</li>
              }
            }) 
          }
        </ul>
        <ul>
          <li>Planeta natal</li>
          { 
            data.allPeople.people.map((p) => {
              if (p.homeworld.name === "unknown") {
                return <li key={p.id}>Desconhecido</li>
              } else {
                return <li key={p.id}>{p.homeworld.name}</li>
              }
            }) 
          }
        </ul>
        <ul>
          <li>Idioma</li>
          {
            data.allPeople.people.map((p) => {
              if (p.species === null || p.species.language === "n/a") {
                return <li key={p.id}>-</li>
              } else if (p.species.language === "unknown") {
                return <li key={p.id}>Desconhecido</li>
              } else {
                return <li key={p.id}>{p.species.language}</li>
              }
            }) 
          }
        </ul>
      </Table>
      <Authorship />
    </EachListContainer>
  );
}
