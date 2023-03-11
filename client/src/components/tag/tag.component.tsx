import { useRecoilState, useSetRecoilState } from 'recoil';

import { CategoryFilterState, MobileMenuState } from '../../recoil/store';
import { CATEGORY_TYPES } from '../../types';

import { ButtonTagContainer, TagContainer } from './tag.styles';

export function Tag({ type }: { type: string }) {
  return (
    <TagContainer>
      {CATEGORY_TYPES[type]}
    </TagContainer>
  );
}

export function TagButton({ type }: { type: string }) {
  const [currentTag, setCurrentTag] = useRecoilState(CategoryFilterState);
  const setMobileMenuOpen = useSetRecoilState(MobileMenuState);

  const isSelected = currentTag === CATEGORY_TYPES[type];

  const onClickTag = () => {
    setMobileMenuOpen(false);
    setCurrentTag(CATEGORY_TYPES[type]);
  };

  return (
    <ButtonTagContainer
      className={isSelected ? 'selected' : ''}
      onClick={() => onClickTag()}
    >
      {CATEGORY_TYPES[type]}
    </ButtonTagContainer>
  );
}
