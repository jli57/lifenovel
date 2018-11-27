json.set! post.id do
  json.extract! post, :id, :author_id, :body, :page_id, :created_at, :updated_at
  json.photo_urls post.photos.map { |file| url_for(file) }
end
