import React from 'react';

const PostMenu = ({ post, openModal, deletePost, currentUserId }) => {

  const authorOptions = (
    <ul>
      <li onClick={ (e) => openModal('editPost', { postId: post.id }) } >
        <button>Edit Post</button>
      </li>
      <li onClick={ () => deletePost(post.id) } >
        <button>Delete</button>
      </li>
    </ul>
  );

  const currenUserOptions = (
    <ul>
      <li>
        <button>Save Post</button>
      </li>
      <li>
        <button>Hide Post</button>
      </li>
    </ul>
  )

  // const profileOwnerOptions = (
  //   <ul>
  //     <li>
  //       <button>Remove Post</button>
  //     </li>
  //   </ul>
  // )

  return (
    <div className="post-menu">
      { currentUserId === post.author_id ? authorOptions : currenUserOptions }
    </div>
  );

};

export default PostMenu;
