import React from 'react';

const PostMenu = ({ postId, openModal, deletePost }) => (
  <div className="post-menu">
    <ul>
      <li onClick={ () => openModal('editPost', postId) } >
        <button>Edit Post</button>
      </li>
      <li onClick={ () => deletePost(postId) } >
        <button>Delete</button>
      </li>
    </ul>
  </div>

);

export default PostMenu;
