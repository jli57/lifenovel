export const filterPagePosts = ( session, posts ) => (
  Object.values(posts)
    .filter( post => post.page_id === session.id )
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
