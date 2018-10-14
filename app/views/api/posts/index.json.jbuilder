json.posts do
  @posts.each do |post|
    json.partial! 'post', post: post
  end
end

json.comments do
  comments = @posts.each do |post|
    post.comments.each do |comment|
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end
