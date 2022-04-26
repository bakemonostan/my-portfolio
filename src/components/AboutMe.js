import Wrapper from '../Assets/wrappers/IntroSection';
import Hero from '../Assets/image/HeroImg.jpeg';

const AboutMe = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <img src={Hero} alt='Second hero img' className='hero' />
        </div>

        <h3>Meh</h3>
      </div>
    </Wrapper>
  );
};
export default AboutMe;
