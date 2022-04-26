import Wrapper from '../../Assets/wrappers/IntroSection';
import Hero from '../../Assets/image/HeroImg2.jpeg';

const Home = () => {
  return (
    <Wrapper primary>
      <nav>
        <div className='logo'>
          <h1>BakemonoStan</h1>
        </div>
        <div className='nav_menu'>
          <ul className='nav__items'>
            <li>Home</li>
            <li>About Me</li>
            <li>My PortFolio</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <div>
          <img src={Hero} alt='hero' className='hero' />
        </div>
        <h2 className='intro'>
          Hello There 🧔🏼, I'm Ehiz, A junior Front-End Developer
        </h2>
        <p className='hero-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          inventore vel maxime aspernatur quam cum. Aut deleniti, quis officia
          ut dolore laudantium vero quas architecto minus delectus assumenda.
        </p>
        <button className='btn'>
          <p className='btn-text'> View My Resume</p>
        </button>
      </div>
    </Wrapper>
  );
};
export default Home;
