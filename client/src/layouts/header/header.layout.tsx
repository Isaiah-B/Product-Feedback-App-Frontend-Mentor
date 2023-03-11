import { useRecoilValue } from 'recoil';

import RoadmapTab from '../../components/roadmap-tab/roadmap-tab.component';
import TagFilter from '../../components/tag-filter/tag-filter.component';
import { MobileMenuState } from '../../recoil/store';

import { HeaderContainer, HeaderImage, MobileHeaderWrapper } from './header.styles';

function Header() {
  const mobileMenuOpen = useRecoilValue(MobileMenuState);

  return (
    <MobileHeaderWrapper className={`${mobileMenuOpen ? 'menu-open' : ''}`}>
      <HeaderContainer>
        <HeaderImage>
          <h2>Frontend Mentor</h2>
          <span>Feedback Board</span>
        </HeaderImage>

        <TagFilter />

        <RoadmapTab />
      </HeaderContainer>
    </MobileHeaderWrapper>
  );
}

export default Header;
