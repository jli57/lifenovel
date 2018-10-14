export const fetchComments = (comments) => (
  $.ajax({
    method: "GET",
    url: "/api/comments"
  })
)

export const createComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `/api/posts/${comment.post_id}/comments`,
    data: { comment }
  })
)

export const updateComment = (comment) => (
  $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
)

export const deleteComment = (commentId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  })
)
