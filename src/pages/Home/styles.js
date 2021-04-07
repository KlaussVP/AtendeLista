import styled from 'styled-components';

const HomeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #f4d160;
  margin-top: 3rem;
  min-height: calc(100vh - 50px);
 
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 3%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 470px) {
    margin-top: 0;
  }
`;

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #8ac4d0;
  border: 5px solid black;
  border-radius: 20px;
  margin-top: 1rem;

  @media(max-width: 885px) {
    border: none;
    margin-bottom: 5rem;
    border-radius: 0;
    justify-content: space-evenly;
  }
`;

const EachList = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 320px;
  max-width: 235px;
  width: 80vw;
  border-radius: 7px;
  box-shadow: 2px 4px 16px 0 rgb(0 0 0 / 50%);
  margin: 1.6em;
  background: #28527a;
  cursor: pointer;
  transition: all 300ms ease;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fbeeac;
    color: #000;
    height: 60%;
    width: 80%;
    border-radius: 50%;
    font-size: 9rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
  }

  :hover {
    opacity: 70%;
  }

  :last-child {
    div {
      transform: rotate(-90deg);
    }
  }
`;

export {
  HomeContainer,
  ListsContainer,
  EachList
};