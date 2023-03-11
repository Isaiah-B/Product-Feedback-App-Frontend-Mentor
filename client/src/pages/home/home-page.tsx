import { useRecoilValue } from 'recoil';

import Header from '../../layouts/header/header.layout';
import MobileHeader from '../../components/mobile-header/mobile-header.component';
import FeedbackListLayout from '../../layouts/suggestions-list/suggestions-list.layout';

import { HomeContainer } from './home-page.styles';
import { MobileMenuState } from '../../recoil/store';

function Home() {
  const mobileMenuOpen = useRecoilValue(MobileMenuState);

  // Prevent background scrolling
  if (mobileMenuOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }

  return (
    <HomeContainer>
      <Header />
      <MobileHeader />
      <FeedbackListLayout />
    </HomeContainer>
  );
}

export default Home;
