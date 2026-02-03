import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts = [
    {
      title: 'Latest Updates',
      description: 'New features and improvements have been released.'
    },
    {
      title: 'Community Post',
      description: 'Welcome to our growing community!'
    },
    {
      title: 'Announcement',
      description: 'Scheduled maintenance this weekend.'
    }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
