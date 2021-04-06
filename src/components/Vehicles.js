import React, { useEffect, useState } from 'react';
import EachListContainer from './Shared/EachListContainer';
import Title from './Shared/Title';
import Table from './Shared/Table';
import { FaSpaceShuttle } from 'react-icons/fa';
import Loading from './Shared/Loading';
import axios from 'axios';

export default function VehiclesList() {
  const [vehicles, setVehicles] = useState([]);
  
  useEffect(() => {
    axios.post("https://swapi-graphql.netlify.app/.netlify/functions/index", {
    query: `
      query {
        allVehicles {
          vehicles {
            id,
            name,
            model,
            maxAtmospheringSpeed,
            crew
          }
        }
      }    
    `,
  })
  .then((response) => setVehicles(response.data.data.allVehicles.vehicles));
  },[]);

  return(
    <EachListContainer>
      <Title icon='vehicles'>
        <div><FaSpaceShuttle /></div>
        <h1>Veículos</h1>
      </Title>
      <Table>
        <ul>
          <li>Nome</li>
          {vehicles.length !== 0 ? vehicles.map((v) => <li key={v.id}>{v.name}</li>) : <Loading />}
        </ul>
        <ul>
          <li>Modelo</li>
          {vehicles.length !== 0 ? vehicles.map((v) => <li key={v.id}>{v.model}</li>) : <Loading />}
        </ul>
        <ul>
          <li>Velocidade atmosférica máxima (km/h)</li>
          { vehicles.length !== 0 
            ? vehicles.map((v) => {
              return v.maxAtmospheringSpeed === null
                ? <li key={v.id}>-</li>
                : <li key={v.id}>{v.maxAtmospheringSpeed}</li>
            }) 
            : <Loading />}
        </ul>
        <ul>
          <li>Nº de tripulantes</li>
          {vehicles.length !== 0 ? vehicles.map((v) => <li key={v.id}>{v.crew}</li>) : <Loading />}
        </ul>
      </Table>
    </EachListContainer>
  );
}
