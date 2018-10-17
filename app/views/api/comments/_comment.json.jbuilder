json.set! comment.id do
  json.extract! comment, :id, :author_id
  json.post_id comment.commentable_id
  json.extract! comment, :body, :parent_id, 
    :child_comment_ids,
    :created_at, :updated_at
end
