// Allow string indexing of objects
export interface StringIndex {
  [index: string]: any,
}

export interface RoadmapStatus {
  name: string,
  description: string,
  color: string,
}

export const CATEGORY_TYPES: StringIndex = {
  all: 'all',
  ui: 'UI',
  ux: 'UX',
  enhancement: 'enhancement',
  bug: 'bug',
  feature: 'feature',
};

export const SORT_TYPES: StringIndex = {
  most_upvotes: 'Most Upvotes',
  least_upvotes: 'Least Upvotes',
  most_comments: 'Most Comments',
  least_comments: 'Least Comments',
};

export const ROADMAP_STATUS = {
  planned: {
    name: 'planned',
    description: 'Ideas prioritized for research',
    color: 'hsl(14, 83%, 74%)',
  },
  in_progress: {
    name: 'in-progress',
    description: 'Currently being developed',
    color: 'hsl(282, 83%, 52%)',
  },
  live: {
    name: 'live',
    description: 'Released features',
    color: 'hsl(204, 94%, 68%)',
  },
};

export const ERROR_TYPES = {
  NOT_AUTHORIZED: 'User is not authorized',
  RESOURCE_NOT_FOUND: 'Resource could not be found',
  USER_NOT_FOUND: 'User could not be found',
  DUPLICATE_USERNAME: 'A user with this username already exists',
};

export interface UserType {
  _id: string,
  name: string,
  username: string,
  image: string,
  upvotes: string[],
}

export interface CommentType {
  _id: string,
  content: string,
  replyingTo?: string,
  replies: CommentType[],
  user: UserType;
}

export interface FeedbackType {
  _id: string,
  title: string,
  description: string,
  upvotes: number,
  category: 'enhancement' | 'feature' | 'bug' | 'UI' | 'UX',
  status: 'suggestion' | 'planned' | 'in-progress' | 'live',
  comments: CommentType[],
  user: string,
}
