import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './post/state/post.state';

const router: Routes = [{ path: '', component: PostComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    StoreModule.forFeature('posts', postsReducer),
  ],
})
export class PostsModule {}
