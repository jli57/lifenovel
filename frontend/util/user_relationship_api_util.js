export const createUserRelationship = (userRelationship) => (
  $.ajax({
    method: "POST",
    url: `/api/user_relationships`,
    data: { userRelationship }
  })
)

export const updateUserRelationship = (userRelationship) => (
  $.ajax({
    method: "PATCH",
    url: `/api/user_relationships/${post.id}`,
    data: { userRelationship }
  })
)
