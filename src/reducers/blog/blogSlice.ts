import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Post {
  id: number;
  title: string;
  content: string;
  hashtags: string[];
  tags: string[];
  date: string;
  imageUrl: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

interface BlogState {
  posts: Post[];
}

const initialState: BlogState = {
  posts: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
    updatePost(state, action: PayloadAction<Post>) {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    addComment(state, action: PayloadAction<{ postId: number; comment: Comment }>) {
      const postIndex = state.posts.findIndex((p) => p.id === action.payload.postId);
      if (postIndex !== -1) {
        state.posts[postIndex].comments.push(action.payload.comment);
      }
    },
    removeComment(state, action: PayloadAction<{ postId: number; commentId: number }>) {
      const postIndex = state.posts.findIndex((p) => p.id === action.payload.postId);
      if (postIndex !== -1) {
        state.posts[postIndex].comments = state.posts[postIndex].comments.filter(
          (c) => c.id !== action.payload.commentId
        );
      }
    },
  },
});

export const {
  addPost,
  removePost,
  updatePost,
  addComment,
  removeComment,
} = blogSlice.actions;

export const selectPosts = (state: RootState) => state.blog.posts;

export default blogSlice.reducer;
