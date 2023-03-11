import { ArrowUpIcon, UpvoteButtonContainer, UpvoteCount } from './upvote-button.styles';

interface UpvoteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  upvotes: number,
  isUpvoted?: boolean,
}

function UpvoteButton({ upvotes, isUpvoted = false, ...otherProps }: UpvoteButtonProps) {
  return (
    <UpvoteButtonContainer
      className={`${isUpvoted ? 'upvoted' : ''}`}
      {...otherProps}
    >
      <ArrowUpIcon />
      <UpvoteCount>{upvotes}</UpvoteCount>
    </UpvoteButtonContainer>
  );
}

export default UpvoteButton;
