import React from 'react';

const CommentMenu = ({ comment, toggleForm, toggleEditForm, deleteComment, currentUserId, closeModal }) => {

  const handleClick = () => {
    closeModal(); 
    toggleForm("Edit"); 
  }

  const authorOptions = (
    <ul>
      <li onClick={ handleClick } >
        <i className="fas fa-pencil-alt"></i>
        <button>Edit Comment</button>
      </li>
      <li onClick={ () => deleteComment(comment.id) } >
        <i className="fas fa-trash-alt"></i>
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
