@likes.each do |like|
  json.partial! '/api/likes/like', like: like 
end 