import React from 'react';
import EachListContainer from './Shared/EachListContainer';
import Title from './Shared/Title';
import Table from './Shared/Table';
import Loading from './Shared/Loading';
import Authorship from './Shared/Authorship';
import { FaSpaceShuttle } from 'react-icons/fa';
import { gql, useQuery } from '@apollo/client';

export default function VehiclesList() {
  const filmData = gql`
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
  `;
  const { loading, error, data } = useQuery(filmData);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  return(
    <EachListContainer>
      <Title icon='vehicles'>
        <div><FaSpaceShuttle /></div>
        <h1>Veículos</h1>
      </Title>
      <Table>
        <ul>
          <li>Nome</li>
          {data.allVehicles.vehicles.map((v) => <li key={v.id}>{v.name}</li>)}
        </ul>
        <ul>
          <li>Modelo</li>
          {data.allVehicles.vehicles.map((v) => <li key={v.id}>{v.model}</li>)}
        </ul>
        <ul>
          <li>Velocidade atmosférica máxima (km/h)</li>
          { 
            data.allVehicles.vehicles.map((v) => {
              return v.maxAtmospheringSpeed === null
                ? <li key={v.id}>-</li>
                : <li key={v.id}>{v.maxAtmospheringSpeed}</li>
            }) 
          }
        </ul>
        <ul>
          <li>Nº de tripulantes</li>
          {data.allVehicles.vehicles.map((v) => <li key={v.id}>{v.crew}</li>)}
        </ul>
      </Table>
      <Authorship />
    </EachListContainer>
  );
}
