import styled from 'styled-components';

const AuthorshipContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: absolute;
  color: #fbeeac;
  bottom: 0.5rem;

  p {
    margin-bottom: 12px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-size: 1.8rem;
    margin: 0 6px;
  }
`;

export default AuthorshipContainer;