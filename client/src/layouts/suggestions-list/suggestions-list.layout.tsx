import SuggestionsListHeader from '../../components/suggestions-list-header/suggestions-list-header.component';
import SuggestionsList from '../../components/suggestions-list/suggestions-list.component';

import { SuggestionsListLayoutContainer } from './suggestions-list.styles';

function SuggestionsListLayout() {
  return (
    <SuggestionsListLayoutContainer>
      <SuggestionsListHeader />
      <SuggestionsList />
    </SuggestionsListLayoutContainer>
  );
}

export default SuggestionsListLayout;
