import { useRecoilState, useRecoilValue } from 'recoil';

import { FeedbackStatusCounts, RoadmapMobileSelection } from '../../recoil/store';
import { ROADMAP_STATUS } from '../../types';

import { MobileMenuHighlight, MobileMenuSelector, RoadmapMobileMenuContainer } from './roadmap-mobile.menu.styles';

function RoadmapMobileMenu() {
  const statusCounts = useRecoilValue(FeedbackStatusCounts);
  const [selectedStatus, setSelectedStatus] = useRecoilState(RoadmapMobileSelection);

  return (
    <RoadmapMobileMenuContainer>
      <MobileMenuSelector
        className={`${selectedStatus === ROADMAP_STATUS.planned ? 'selected' : ''}`}
        onClick={() => setSelectedStatus(ROADMAP_STATUS.planned)}
      >
        <h3>{`Planned (${statusCounts.planned})`}</h3>
      </MobileMenuSelector>

      <MobileMenuSelector
        className={`${selectedStatus === ROADMAP_STATUS.in_progress ? 'selected' : ''}`}
        onClick={() => setSelectedStatus(ROADMAP_STATUS.in_progress)}
      >
        <h3>{`In-Progress (${statusCounts.inProgress})`}</h3>
      </MobileMenuSelector>

      <MobileMenuSelector
        className={`${selectedStatus === ROADMAP_STATUS.live ? 'selected' : ''}`}
        onClick={() => setSelectedStatus(ROADMAP_STATUS.live)}
      >
        <h3>{`Live (${statusCounts.live})`}</h3>
      </MobileMenuSelector>

      <MobileMenuHighlight color={selectedStatus.color} />
    </RoadmapMobileMenuContainer>
  );
}

export default RoadmapMobileMenu;
