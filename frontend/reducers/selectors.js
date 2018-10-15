export const filterPagePosts = ( session, posts ) => (
  Object.values(posts)
    .filter( post => post.page_id === session.id )
    .sort( (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at) )
);

export const filterFeedPosts = ( friends, posts ) => (
  Object.values(posts)
    .filter( post => friends.includes( post.page_id ) )
    .sort( (a, b) => a.created_at - b.created_at )
);

export const addAuthorToPosts = ( posts, users ) => (
  Object.values(posts).map( post => {
    const author = users[post.author_id];
    const author_fullname = `${author.first_name} ${author.last_name}`;
    post.author = author_fullname;
    return post;
  })
);

export const filterPostComments = ( comments, postId, n ) => (
  Object.values(comments)
    .filter( comment => comment.post_id === postId && comment.parent_id === null )
    .sort( (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
    .slice(0, n)
);

export const countPostComments = ( comments, postId ) => (
  Object.values(comments)
    .filter( comment => comment.post_id === postId )
    .length
);

export const filterRelationships = ( userId, userRelationships, rel_type ) => (
  Object.values(userRelationships)
    .filter( rel =>
      ( rel.user1_id === userId || rel.user2_id === userId ) &&
      rel.rel_type === rel_type
    )
    .map( rel => rel.user1_id === userId ? rel.user2_id : rel.user1_id )
);

export const filterFriends = ( userId, users, friendIds ) => {
  console.log(friendIds)
  return Object.values(users)
    .filter( user => friendIds.includes(user.id) )
    .sort( (a, b) => `${a.first_name} ${a.last_name}` - `${b.first_name} ${b.last_name}` );
};
