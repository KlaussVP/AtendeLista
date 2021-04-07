import styled from 'styled-components';

const Table = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fbeeac;
  background: #000;
  margin-bottom: 7rem;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 3px solid #f4d160;
    border-bottom: 3px solid #f4d160;

    :first-child {
      border-left: 3px solid #f4d160;
    }

    :last-child {
      border-right: 3px solid #f4d160;
    }

    li {
      border: 2px solid #f4d160;
      padding: 10px;
    }

    li:first-child {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export default Table;