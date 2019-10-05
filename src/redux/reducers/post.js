import * as postActions from '../actions/post';

const initialState = {
  item: {},
  items: [],
  loading: false,
  error: null
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case postActions.GET_POSTS:
      return {
        ...state,
        loading: true
      };
    case postActions.GET_POSTS_SUCCESS:
      return {
        ...state,
        items: action.posts,
        loading: false
      };
    case postActions.GET_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case postActions.GET_POST:
      return {
        ...state,
        loading: true
      };
    case postActions.GET_POST_SUCCESS:
      return {
        ...state,
        item: action.post,
        loading: false
      };
    case postActions.GET_POST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
}
