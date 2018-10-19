# PRODUCTION README

<center>
<a href="https://lifenovel.herokuapp.com/#/" title="Go to live site!">
  <img src="app/assets/images/logo.png" width=50 height=50>
</a>

## Lifenovel

</center>


Lifenovel is a social media website modeled after Facebook. The initial project and its [key features](#key-features) were completed within the first 10 days since its conception as of Oct 19, 2018. For future plans of additional features, please see [additional planned features](#additional-planned-features). 

* [Go to live site](https://lifenovel.herokuapp.com/#/)
* [Technologies](#technologies)
* [Key Features](#key-features)
* [Techhnical Implementation](#technical-implementation)
* [Additional Planned Features](#additional-planned-features)
* [Credits](#credits)

## Technologies

Lifenovel is made with rails in the backend and react/redux for the frontend. The data is housed in a Postgresl Sql database. 


## Key Features 
* User Authentication 
  * Signup for an account
  * Log in/Log out
  * Change profile picture. 
* Friends 
  * Add friends
  * Request friends
  * Accept friend requests 
  * View incoming friend requests 
  * Remove friends 
* Feed 
  * View your friend's activities on the feed 
* Posts 
  * Post on your own wall 
  * Edit your posts 
  * Delete your posts 
  * Post on your friends' walls 
* Comments 
  * Comment on posts 
  * Reply to comments on posts 
  * Edit your comments 
  * Delete your comments 
* Likes 
  * Like/Unlike a post
  * Like/Unlike a comment 


## Technical Implementation

Comments were implemented with a recursive React Component to allow for recursive commenting. Each comment has a `parent_id` which specifies the parent comment. Direct comments to posts have a `parent_id` that is `null`. The `CommentIndexContainer` is  rendered within each comment to display child comments and filters for only child comments. 

``` javascript 
// comment_index_container.jsx filters 
const mapStateToProps = ({ entities: { comments } }, ownProps) => {
  const { parentId, postId } = ownProps; 
  return {
    comments: filterPostComments(comments, postId, parentId),
    total: countPostComments( comments, postId ), 
    postId: postId, 
    parentId: parentId,
  }; 
};

// comment_index_item.jsx

{ this.props.comment.child_comment_ids.length > 0 ? 
  <div className="child-comments" >
    <CommentIndexContainer postId={ commentable_id } parentId={ id } /> 
  </div>
: null }

```


## Additional Planned Features 
* Notifications for posts
* Notifications for comments
* Notifications for likes 
* Chat/Instant messaging
* Image posts 
* Uploading images/albums

## Credits

A special thanks to the following technologies/resources that made this project possible: 
* [Node.js](https://nodejs.org/en/)
* [React Spinners](http://www.davidhu.io/react-spinners/)
* [Moment.js](https://momentjs.com/)
* [Pusheen Cats](http://pusheen.com/)
* [App Academy](https://www.appacademy.io/)
