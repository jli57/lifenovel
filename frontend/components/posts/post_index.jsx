import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostContainer from './create_post_container';
import { Route } from 'react-router-dom';

const PostIndex = ({ posts, currentUser, openModal }) => (
  <div>
    <div>
      <Route path="/" component={ CreatePostContainer } />
    </div>
    <div className="post-index">
      <h1>Posts</h1>
      <ul className="flex-vert">
        { posts.map( post => (
          <PostIndexItem
            key={ post.id }
            post={ post }
            currentUser={ currentUser }
            openModal={ openModal }
            />)) }
      </ul>
    </div>
  </div>
);

export default PostIndex;
