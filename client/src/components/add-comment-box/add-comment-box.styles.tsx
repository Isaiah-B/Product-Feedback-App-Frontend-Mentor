import styled from 'styled-components';

import { BodyM } from '../../index.styles';

export const AddCommentContainer = styled.form`
  padding: 2.4rem 3.4rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);

  h3 {
    margin-bottom: 2.4rem;
  }
`;

export const CommentTextArea = styled.textarea`
  margin-bottom: 1.6rem;
`;

export const AddCommentBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    ${BodyM};
    color: hsl(224, 20%, 49%);
  }
`;
