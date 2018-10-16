export const createUserRelationship = (user_relationship) => (
  $.ajax({
    method: "POST",
    url: `/api/user_relationships`,
    data: { user_relationship }
  })
)

export const updateUserRelationship = (user_relationship) => (
  $.ajax({
    method: "PATCH",
    url: `/api/user_relationships/${user_relationship.id}`,
    data: { user_relationship }
  })
)

export const deleteUserRelationship = (userRelationshipId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/user_relationships/${userRelationshipId}`,
  })
)
