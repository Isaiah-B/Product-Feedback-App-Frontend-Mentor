import { NotFoundPageContainer } from './not-found.styles';

import { ReactComponent as Empty } from '../../assets/suggestions/illustration-empty.svg';

function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <h1>Sorry, there&apos;s nothing here!</h1>

      <Empty />
    </NotFoundPageContainer>
  );
}

export default NotFoundPage;
