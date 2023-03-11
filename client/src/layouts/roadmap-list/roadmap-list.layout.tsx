import RoadmapColumn from '../../components/roadmap-column/roadmap-column.component';

import { ROADMAP_STATUS } from '../../types';

import { RoadmapListContainer } from './roadmap-list.styles';

function RoadmapList() {
  return (
    <RoadmapListContainer>
      <RoadmapColumn
        status={ROADMAP_STATUS.planned}
      />

      <RoadmapColumn
        status={ROADMAP_STATUS.in_progress}
      />

      <RoadmapColumn
        status={ROADMAP_STATUS.live}
      />
    </RoadmapListContainer>
  );
}

export default RoadmapList;
