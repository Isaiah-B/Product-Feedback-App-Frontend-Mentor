import { useRecoilValue } from 'recoil';

import SuggestionItem from '../feedback-item/feedback-item.component';

import { FeedbackState } from '../../recoil/store';
import { RoadmapStatus } from '../../types';

import { RoadmapColumnContainer, RoadmapColumnHead, RoadmapColumnItems } from './roadmap-column.styles';

function RoadmapColumn({ status }: { status: RoadmapStatus }) {
  const feedbackList = useRecoilValue(FeedbackState);

  const columnItems = feedbackList.filter((item) => item.status === status.name.toLowerCase());
  const sortedColumnItems = columnItems.sort((a, b) => b.upvotes - a.upvotes);

  return (
    <RoadmapColumnContainer>
      <RoadmapColumnHead>
        <h3>{`${status.name} (${columnItems.length})`}</h3>
        <p>{status.description}</p>
      </RoadmapColumnHead>

      <RoadmapColumnItems>
        {
          sortedColumnItems.map((item) => (
            <SuggestionItem
              key={item._id}
              item={item}
              isCompact
              isRoadmap
              roadmapColor={status.color}
            />
          ))
        }
      </RoadmapColumnItems>
    </RoadmapColumnContainer>
  );
}

export default RoadmapColumn;
