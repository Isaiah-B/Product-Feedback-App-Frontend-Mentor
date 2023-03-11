import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '../Button/Button.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';

import { SORT_TYPES } from '../../types';
import {
  FeedbackSortState,
  FilteredSuggestions,
  CurrentUserState,
  ModalState,
} from '../../recoil/store';

import {
  ListHeaderLeft,
  NumOfSuggestions,
  SortDropdownWrapper,
  SortSuggestionsButton,
  SortSuggestionsButtonArrow,
  SuggestionsIcon,
  SuggestionsListHeaderContainer,
} from './suggestions-list-header.styles';

function SuggestionsListHeader() {
  const navigate = useNavigate();

  const currentUser = useRecoilValue(CurrentUserState);
  const filteredSuggestionsList = useRecoilValue(FilteredSuggestions);
  const setModalState = useSetRecoilState(ModalState);
  const [sortBy, setSortBy] = useRecoilState(FeedbackSortState);

  const [menuOpen, setMenuOpen] = useState(false);

  const listLength = filteredSuggestionsList.length;
  const dropdownItems = Object.values(SORT_TYPES);

  const selectDropdownItem = useCallback((itemName: string) => {
    setSortBy(itemName);
    setMenuOpen(false);
  }, []);

  const onClickAddFeedback = () => {
    if (currentUser._id) {
      navigate('/create-feedback');
    } else {
      setModalState({ action: 'add feedback', isOpen: true });
    }
  };

  return (
    <SuggestionsListHeaderContainer>
      <ListHeaderLeft>
        <SuggestionsIcon />

        <NumOfSuggestions>{`${listLength} Suggestion${listLength === 1 ? '' : 's'}`}</NumOfSuggestions>

        <SortDropdownWrapper>
          <SortSuggestionsButton onClick={() => setMenuOpen(!menuOpen)}>
            <div>
              <h4 className="regular">Sort by:&nbsp;</h4>
              <h4>{sortBy}</h4>
            </div>
            <SortSuggestionsButtonArrow />
          </SortSuggestionsButton>

          {
            menuOpen
              ? (
                <DropdownMenu
                  items={dropdownItems}
                  selected={sortBy}
                  onClickOutside={() => setMenuOpen(false)}
                  handleSelect={selectDropdownItem}
                />
              )
              : null
          }
        </SortDropdownWrapper>
      </ListHeaderLeft>

      <Button
        buttonType="button1"
        onClick={() => onClickAddFeedback()}
      >
        + Add Feedback
      </Button>
    </SuggestionsListHeaderContainer>
  );
}

export default SuggestionsListHeader;
