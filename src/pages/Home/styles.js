import styled from 'styled-components';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #f4d160;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #8ac4d0;
  padding: 30px;
  border: 5px solid black;
  border-radius: 20px;
  margin-top: 1rem;
`;

const EachList = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 350px;
  min-width: 215px;
  max-width: 235px;
  width: 20vw;
  border-radius: 7px;
  box-shadow: 2px 4px 16px 0 rgb(0 0 0 / 50%);
  margin-right: 6vw;
  background: #28527a;
  cursor: pointer;
  transition: all 300ms ease;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fbeeac;
    color: #000;
    height: 56%;
    width: 80%;
    border-radius: 50%;
    font-size: 9rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
  }

  :last-child {
    margin-right: 0;
  }

  :hover {
    opacity: 70%;
  }
`;

export {
  HomeContainer,
  ListsContainer,
  EachList
};