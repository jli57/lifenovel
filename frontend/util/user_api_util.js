export const fetchUsers = (userIds) => (
  $.ajax({
    method: "GET",
    url: "/api/users",
    data: { userIds }
  })
)
