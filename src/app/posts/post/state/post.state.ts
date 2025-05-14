import { createReducer } from '@ngrx/store';

export interface Post {
  id: number;
  title: string;
  description: string;
}
export interface PostState {
  posts: Post[];
}
const intitialState: PostState = {
  posts: [
    { id: 1, title: 'testing', description: 'testing description' },
    { id: 2, title: 'testing2', description: 'testing description' },
  ],
};

export const postsReducer = createReducer(intitialState);
