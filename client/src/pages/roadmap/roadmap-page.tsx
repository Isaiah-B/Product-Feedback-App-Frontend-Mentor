import { useRecoilValue } from 'recoil';

import RoadmapColumn from '../../components/roadmap-column/roadmap-column.component';
import RoadmapHeader from '../../components/roadmap-header/roadmap-header.component';
import RoadmapMobileMenu from '../../components/roadmap-mobile-menu/roadmap-mobile-menu.component';
import RoadmapList from '../../layouts/roadmap-list/roadmap-list.layout';

import { RoadmapMobileSelection } from '../../recoil/store';

import { RoadmapMobileColumnWrapper, RoadmapPageContainer } from './roadmap-page.styles';

function RoadmapPage() {
  const roadmapStatus = useRecoilValue(RoadmapMobileSelection);

  return (
    <RoadmapPageContainer>
      <RoadmapHeader />
      <RoadmapMobileMenu />
      <RoadmapList />

      <RoadmapMobileColumnWrapper>
        <RoadmapColumn
          status={roadmapStatus}
        />
      </RoadmapMobileColumnWrapper>
    </RoadmapPageContainer>
  );
}

export default RoadmapPage;
