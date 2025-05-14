import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './state/post.state';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

    $posts?:Observable<Post[]>
    constructor(private store:Store<AppState>){

    }
    ngOnInit(): void {
       this.$posts = this.store.select(a=> a.posts.posts);
    }

}
