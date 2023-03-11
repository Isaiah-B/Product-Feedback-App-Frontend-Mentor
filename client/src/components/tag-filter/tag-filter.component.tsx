import { TagButton } from '../tag/tag.component';

import { CATEGORY_TYPES } from '../../types';

import { TagFilterContainer } from './tag-filter.styles';

function TagFilter() {
  return (
    <TagFilterContainer>
      {
        Object.keys(CATEGORY_TYPES).map((tagType) => (
          <TagButton
            key={tagType}
            type={tagType}
          />
        ))
      }
    </TagFilterContainer>
  );
}

export default TagFilter;
