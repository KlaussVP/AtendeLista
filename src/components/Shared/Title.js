import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.6em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fbeeac;
    color: #000;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    font-size: 4rem;
    margin-right: 1rem;
    transform: ${({ icon }) => icon === "vehicles" ? 'rotate(-90deg)' : 'none'};
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
  }
`;

export default Title;
