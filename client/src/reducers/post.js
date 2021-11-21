const state = {};
export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;

    case "CREATE_POST":
      return [...posts, action.payload];

    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case "FETCH_POST":
      return { posts: [...posts], post: action.payload.post, isLoading: false };
    default:
      return posts;
  }
};
