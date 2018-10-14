json.set! user_relationship.id do
  json.extract! user_relationship, :id, :user1_id, :user2_id, :rel_type, :created_at
end
