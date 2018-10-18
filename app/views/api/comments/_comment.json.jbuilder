json.set! comment.id do
  json.extract! comment, 
    :id, 
    :author_id, 
    :commentable_id,
    :commentable_type,
    :body, 
    :parent_id, 
    :child_comment_ids,
    :created_at, 
    :updated_at
end
