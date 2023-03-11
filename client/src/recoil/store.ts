import { atom, selector } from 'recoil';

import {
  FeedbackType,
  UserType,
  CATEGORY_TYPES,
  SORT_TYPES,
  ROADMAP_STATUS,
} from '../types';

export const CurrentUserState = atom({
  key: 'CurrentUser',
  default: {} as UserType,
});

export const FeedbackState = atom({
  key: 'FeedbackList',
  default: [] as FeedbackType[],
});

export const CategoryFilterState = atom({
  key: 'CategoryFilter',
  default: CATEGORY_TYPES.all,
});

export const FeedbackSortState = atom({
  key: 'FeedbackSort',
  default: SORT_TYPES.most_upvotes,
});

export const FeedbackStatusCounts = selector({
  key: 'StatusCounts',
  get: ({ get }) => {
    const feedbackList = get(FeedbackState);

    const statusCounts = {
      planned: feedbackList.filter((item) => item.status === 'planned').length,
      inProgress: feedbackList.filter((item) => item.status === 'in-progress').length,
      live: feedbackList.filter((item) => item.status === 'live').length,
    };

    return statusCounts;
  },
});

export const FilteredSuggestions = selector({
  key: 'FilteredFSuggestions',
  get: ({ get }) => {
    const feedbackList = get(FeedbackState);
    const category = get(CategoryFilterState);
    const sort = get(FeedbackSortState);

    const suggestions = feedbackList.filter((item) => item.status === 'suggestion');

    const filterByCategory = () => {
      if (category === 'all') {
        return suggestions;
      }

      return suggestions.filter((item) => item.category === category);
    };

    const sortSuggestions = (list: FeedbackType[]) => {
      const listCopy = [...list];

      switch (true) {
        case sort === SORT_TYPES.most_upvotes:
          return listCopy.sort((a, b) => b.upvotes - a.upvotes);
        case sort === SORT_TYPES.least_upvotes:
          return listCopy.sort((a, b) => a.upvotes - b.upvotes);
        case sort === SORT_TYPES.most_comments:
          return listCopy.sort((a, b) => b.comments.length - a.comments.length);
        case sort === SORT_TYPES.least_comments:
          return listCopy.sort((a, b) => a.comments.length - b.comments.length);
        default:
          return list;
      }
    };

    const filteredByCategory = filterByCategory();
    const sorted = sortSuggestions(filteredByCategory);

    return sorted;
  },
});

export const ModalState = atom({
  key: 'Modal',
  default: {
    action: '',
    isOpen: false,
  },
});

export const MobileMenuState = atom({
  key: 'MobileMenu',
  default: false,
});

export const RoadmapMobileSelection = atom({
  key: 'RoadmapMobile',
  default: ROADMAP_STATUS.planned,
});
