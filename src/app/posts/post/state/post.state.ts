import { createReducer } from '@ngrx/store';

export interface PostState {
  posts: { id: number; title: string; description: string }[];
}
const intitialState: PostState = {
  posts: [
    { id: 1, title: 'testing', description: 'testing description' },
    { id: 2, title: 'testing2', description: 'testing description' },
  ],
};

export const postsReducer = createReducer(intitialState);
