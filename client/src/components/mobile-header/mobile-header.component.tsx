import { useRecoilState } from 'recoil';

import { MobileHeaderContainer, MobileHeaderLeft, MobileMenuButton } from './mobile-header.styles';
import { ReactComponent as MobileMenuIcon } from '../../assets/shared/mobile/icon-hamburger.svg';
import { ReactComponent as MobileCloseIcon } from '../../assets/shared/mobile/icon-close.svg';

import { MobileMenuState } from '../../recoil/store';

function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useRecoilState(MobileMenuState);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <MobileHeaderContainer>
      <MobileHeaderLeft>
        <h2>Frontend Mentor</h2>
        <span>Feedback Board</span>
      </MobileHeaderLeft>

      <MobileMenuButton
        onClick={() => handleMobileMenu()}
      >
        {
          mobileMenuOpen
            ? <MobileCloseIcon />
            : <MobileMenuIcon />
        }
      </MobileMenuButton>
    </MobileHeaderContainer>
  );
}

export default MobileHeader;
