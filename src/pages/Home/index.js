import React from 'react';
import { 
  HomeContainer,
  ListsContainer,
  EachList
} from './styles';
import { FaFilm, FaUser, FaSpaceShuttle} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  function goToList(path) {
    history.push(path);
  }

  return (
    <HomeContainer>
      <h1>Bem-vindo à Atende Lista!</h1>
      <h2>Escolha sua Lista:</h2>
      <ListsContainer>
        <EachList onClick={() => goToList('/films')}>
          <div><FaFilm /></div>
          <p>Filmes</p>
        </EachList>
        <EachList onClick={() => goToList('/people')}>
          <div><FaUser /></div>
          <p>Pessoas</p>
        </EachList>
        <EachList onClick={() => goToList('/vehicles')}>
          <div><FaSpaceShuttle /></div>
          <p>Veículos</p>
        </EachList>
      </ListsContainer>
    </HomeContainer>
  );
}
