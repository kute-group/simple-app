export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILED = "GET_POST_FAILED";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "GET_POSTS_FAILED";

export const GET_POST_CATE = "GET_POST_CATE";
export const GET_POST_CATE_SUCCESS = "GET_POST_CATE_SUCCESS";
export const GET_POST_CATE_FAILED = "GET_POST_CATE_FAILED";


export const GET_POST_CATES = "GET_POST_CATES";
export const GET_POST_CATES_SUCCESS = "GET_POST_CATES_SUCCESS";
export const GET_POST_CATES_FAILED = "GET_POST_CATES_FAILED";


export function getPost(params){
  return {
    type: GET_POST,
    params
  }
}

export function getPosts(){
  return {
    type: GET_POSTS
  }
}

export function getPostCate(id){
  return {
    type: GET_POST_CATE,
    id
  }
}

export function getPostCates(){
  return {
    type: GET_POST_CATES
  }
}
