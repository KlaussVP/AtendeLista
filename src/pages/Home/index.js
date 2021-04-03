import React from 'react';
import MainContainer from '../../components/MainContainer';
import { 
  HomeContainer,
  ListsContainer,
  EachList
} from './styles';
import { FaFilm, FaUser, FaLightbulb} from 'react-icons/fa';

export default function Home() {
  return (
    <HomeContainer>
      <h1>Bem-vindo à Atende Lista!</h1>
      <h2>Escolha sua Lista:</h2>
      <ListsContainer>
        <EachList>
          <div><FaFilm /></div>
          <p>Filmes</p>
        </EachList>
        <EachList>
          <div><FaUser /></div>
          <p>Pessoas</p>
        </EachList>
        <EachList>
          <div><FaLightbulb /></div>
          <p>Veículos Independentes</p>
        </EachList>
      </ListsContainer>
    </HomeContainer>
  );
}