import React from 'react';
import PostIndexItem from './post_index_item';

const PostIndex = ({ currentUser, posts, updatePost, deletePost }) => (
  <div>
    Should contain posts
    <ul className="flex-vert">
      { posts.map( post => (
          <PostIndexItem
            key={ post.id }
            post={ post }
            updatePost={ updatePost }
            deletePost={ deletePost }
            currentUser= { currentUser }
        />)) }
    </ul>
  </div>
);

export default PostIndex;
