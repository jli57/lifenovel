@posts.each do |post|
  json.partial! 'post', post: post
end
