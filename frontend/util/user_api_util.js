export const fetchUsers = (userIds) => (
  $.ajax({
    method: "GET",
    url: "/api/users",
    data: { userIds }
  })
); 

export const searchUsers = (search_text) => (
  $.ajax({
    method: "GET", 
    url: "/api/users/search", 
    data: { search_text }
  })
);