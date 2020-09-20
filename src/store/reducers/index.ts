import {
  SET_POSTS,
  SET_USERS,
  SET_SEARCH_VALUE
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  users: [],
  searchValue: '',
  isSearchEmpty: false
};

type Action = {
  type: string;
  payload?: any;
}

export default function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state;
  }
}
