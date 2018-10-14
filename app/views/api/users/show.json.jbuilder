json.user do
  json.partial! 'api/users/user', user: @user
end

json.user_relationships do
  @user.incoming_relationships.each do |rel|
    json.partial! 'api/user_relationships/user_relationship', user_relationship: rel
  end
  @user.outgoing_relationships.each do |rel|
    json.partial! 'api/user_relationships/user_relationship', user_relationship: rel
  end
end
