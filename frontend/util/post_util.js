export const fetchPosts = (posts) => (
  $.ajax({
    method: "GET",
    url: "/api/posts"
  })
)

export const createPost = (post) => (
  $.ajax({
    method: "POST",
    url: `/api/posts`,
    data: { post }
  })
)

export const updatePost = (post) => (
  $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  })
)

export const deletePost = () => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${post.id}`
  })
)
