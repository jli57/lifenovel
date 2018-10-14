export const fetchPosts = (offset, limit) => (
  $.ajax({
    method: "GET",
    url: "/api/posts",
    data: { offset, limit }
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

export const deletePost = (postId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/posts/${postId}`
  })
)
