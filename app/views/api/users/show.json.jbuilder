json.user do
  json.partial! 'api/users/user', user: @user
end

json.userRelationships do
  json.partial! 'api/user_relationships/rel', user: @user
end
