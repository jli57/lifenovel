user.incoming_relationships.each do |rel|
  json.partial! 'api/user_relationships/user_relationship.json.jbuilder', user_relationship: rel
end
user.outgoing_relationships.each do |rel|
  json.partial! 'api/user_relationships/user_relationship.json.jbuilder', user_relationship: rel
end
