import React from 'react';

const CommentMenu = ({ comment, toggleForm, toggleEditForm, deleteComment, currentUserId, closeModal }) => {

  const handleClick = () => {
    closeModal(); 
    toggleForm("Edit"); 
  }

  const authorOptions = (
    <ul>
      <li onClick={ handleClick } >
        <button>Edit Comment</button>
      </li>
      <li onClick={ () => deleteComment(comment.id) } >
        <button>Delete</button>
      </li>
    </ul>
  );

  const currenUserOptions = (
    <ul>
      <li>
        <button>Save Comment</button>
      </li>
      <li>
        <button>Hide Comment</button>
      </li>
    </ul>
  )
  // const profileOwnerOptions = (
  //   <ul>
  //     <li>
  //       <button>Remove Comment</button>
  //     </li>
  //   </ul>
  // )

  return (
    <div className="comment-menu">
      { currentUserId === comment.author_id ? authorOptions : currenUserOptions }
    </div>
  );

};

export default CommentMenu;
