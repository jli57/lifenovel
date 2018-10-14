export const filterPagePosts = ( session, posts ) => (
  Object.values(posts)
    .filter( post => post.page_id === session.id )
    .sort( (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at) )
)

export const filterFeedPosts = ( friends, posts ) => (
  Object.values(posts)
    .filter( post => friends.includes( post.page_id ) )
    .sort( (a, b) => a.created_at - b.created_at )
)

export const addAuthorToPosts = ( posts, users ) => (
  Object.values(posts).map( post => {
    const author = users[post.author_id];
    const author_fullname = `${author.first_name} ${author.last_name}`;
    post.author = author_fullname;
    return post;
  })
)

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
