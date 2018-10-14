json.set! comment.id do
  json.extract! comment, :id, :author_id
  json.post_id comment.commentable_id
  json.extract! comment, :body, :parent_id, :created_at, :updated_at
end
