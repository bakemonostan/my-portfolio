import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  .logo {
    margin-left: 2rem;
  }

  .nav__items {
    display: none;
  }

  .container {
    padding-top: 6rem;
    margin: 0 auto;
    text-align: center;
    max-width: 450px;
    color: var(--dark);
  }

  .hero {
    box-shadow: -5px 5px 10px var(--light-grayish-cyan);
    margin-bottom: 2rem;
    width: ${(props) => (props.primary ? '175px' : '250px')};
    height: ${(props) => (props.primary ? '175px' : '300px')};
    border-radius: ${(props) => (props.primary ? '50%' : '10px')};
  }

  h2 {
    margin-bottom: 2rem;
    padding: 0 6rem;
    font-weight: 700;
    font-size: 30px;
  }

  .hero-info {
    font-weight: 400;
    font-size: 16px;
  }

  @media (min-width: 825px) {
    .nav__items {
      cursor: pointer;
      list-style: none;
      display: flex;
      column-gap: 2.5rem;
      margin-right: 2rem;
    }
  }
`;

export default Wrapper;
