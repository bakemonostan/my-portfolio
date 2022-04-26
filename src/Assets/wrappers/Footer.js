import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    row-gap: 3rem;
    margin: 2rem 0;
    span {
      margin: 0 1.5rem;
    }
    img {
      cursor: pointer;
    }
  }

  p {
    color: var(--dark);
    font-size: 18px;
    font-weight: 500;
  }
`;
export default Wrapper;
