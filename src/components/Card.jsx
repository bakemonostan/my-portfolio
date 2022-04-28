import Img from '../Assets/image/HeroImg2.jpeg';

const Card = ({ title, info, img, link, code }) => {
  return (
    <div className='card'>
      <div className='imgbox'>
        <img src={Img || img} alt='#' className='card-img' />
      </div>
      <div className='content'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-info'>{info}</p>
        <button className='btn'>
          <p className='btn-text'>View Project</p>
        </button>
      </div>
    </div>
  );
};
export default Card;
