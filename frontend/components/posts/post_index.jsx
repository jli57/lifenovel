import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = ({ posts, updatePost, deletePost, currentUser, openModal }) => (
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
);

export default PostIndex;
