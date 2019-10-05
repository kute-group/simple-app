export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILED = "GET_POST_FAILED";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";



export function getPost(id){
  return {
    type: GET_POST,
    id
  }
}

export function getPosts(){
  return {
    type: GET_POSTS
  }
}
