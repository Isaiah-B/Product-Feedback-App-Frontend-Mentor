import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FeedbackStatusCounts, MobileMenuState } from '../../recoil/store';

import {
  RoadmapListItemCircle,
  RoadmapListItemCount,
  RoadmapListItemLeft,
  RoadmapTabContainer,
  RoadmapTabHead,
  RoadmapTabLink,
  RoadmapTabList,
  RoadmapTabListItem,
} from './roadmap-tab.styles';

function RoadmapTabItem({ status, count }: { status: string, count: number }) {
  return (
    <RoadmapTabListItem>
      <RoadmapListItemLeft>
        <RoadmapListItemCircle />
        <span>{status}</span>
      </RoadmapListItemLeft>

      <RoadmapListItemCount>{count}</RoadmapListItemCount>
    </RoadmapTabListItem>
  );
}

function RoadmapTab() {
  const statusCounts = useRecoilValue(FeedbackStatusCounts);
  const setMobileMenuOpen = useSetRecoilState(MobileMenuState);

  return (
    <RoadmapTabContainer>
      <RoadmapTabHead>
        <h3>Roadmap</h3>
        <RoadmapTabLink
          to="/roadmap"
          onClick={() => setMobileMenuOpen(false)}
        >
          View
        </RoadmapTabLink>
      </RoadmapTabHead>

      <RoadmapTabList>
        <RoadmapTabItem status="Planned" count={statusCounts.planned} />
        <RoadmapTabItem status="In-Progress" count={statusCounts.inProgress} />
        <RoadmapTabItem status="Live" count={statusCounts.live} />
      </RoadmapTabList>
    </RoadmapTabContainer>
  );
}

export default RoadmapTab;
