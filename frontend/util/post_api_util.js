export const fetchPosts = ({user_ids, offset, limit}) => (
  $.ajax({
    method: "GET",
    url: "/api/posts",
    data: { user_ids, offset, limit }
  })
)

export const createPost = (post) => (
  $.ajax({
    method: "POST",
    url: "/api/posts",
    data: { post }
  })
)

export const createPhotoPost = (formData) => {
  return $.ajax({
    method: "POST",
    url: "/api/posts",
    data: formData,
    contentType: false,
    processData: false
  })
};

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
