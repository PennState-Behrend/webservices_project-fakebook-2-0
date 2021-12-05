import * as api from "../api";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    console.log(data);

    dispatch({ type: "FETCH_POST", payload: { post: data }, isLoading: false });
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};


export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: "COMMENT", payload: data });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    const infos = {
      posts: null,
      likes: null,
      comments: null,
    };
    const { data } = await api.getAllUserPosts(id);

    let likeCount = 0;
    let commentCount = 0;
    infos.posts = data.post.length;

    for (let i = 0; i < infos.posts; i++) {
      likeCount += data.post[i].likes.length;
      commentCount += data.post[i].comments.length;
    }
    infos.comments = commentCount;
    infos.likes = likeCount;

    data.user.info = { ...infos };

    // dispatch({ type: "COMMENT", payload: data });
    return data;
  } catch (error) {
    console.log(error);
  }
};

