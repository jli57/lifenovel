json.set! post.id do 
  json.extract! post, :author_id, :body, :page_id
end
