import Wrapper from '../../Assets/wrappers/Footer';
import FB from '../../Assets/image/fb.png';
import IG from '../../Assets/image/insta.png';
import LINKEDIN from '../../Assets/image/Linkedin.png';
import TWITTER from '../../Assets/image/Group.png';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <span>
          <img src={FB} alt='facebook link' />
        </span>
        <span>
          <img src={IG} alt='Instagram link' />
        </span>
        <span>
          <img src={TWITTER} alt='Twitter link' />
        </span>
        <span>
          <img src={LINKEDIN} alt='Linkedin link' />
        </span>
      </div>

      <p>Copyright ©2022 All rights reserved</p>
    </Wrapper>
  );
};
export default Footer;
