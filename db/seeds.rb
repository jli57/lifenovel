# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
include Faker

User.destroy_all
Post.destroy_all
Comment.destroy_all

user = User.new({
  first_name: "Demo",
  last_name: "User",
  birth_date: "2018-10-08",
  email: "demo-user@gmail.com",
  gender: "F",
  password: "password"
})
file = File.open('app/assets/images/default.jpg')
user.profile_photo.attach(io: file, filename: 'default.jpg')
user.save!

10.times do
  user = User.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    birth_date: Faker::Date.birthday(18, 65),
    email: Faker::Internet.email,
    gender: Faker::Gender.binary_type[0],
    password: "test123"
  )
  file = File.open('app/assets/images/default.jpg')
  user.profile_photo.attach(io: file, filename: 'default.jpg')
  user.save!
end

user_ids = User.ids
demo = User.first.id
other_users = user_ids.reject{ |id| demo == id }
2.times do
  UserRelationship.create(
    user1_id: demo,
    user2_id: other_users.pop,
    rel_type: "accepted"
  )
end
2.times do
  UserRelationship.create(
    user1_id: demo,
    user2_id: other_users.pop,
    rel_type: "pending"
  )
end
1.times do
  UserRelationship.create(
    user1_id: demo,
    user2_id: other_users.pop,
    rel_type: "removed"
  )
end
2.times do
  UserRelationship.create(
    user1_id: other_users.pop,
    user2_id: demo,
    rel_type: "accepted"
  )
end
2.times do
  UserRelationship.create(
    user1_id: other_users.pop,
    user2_id: demo,
    rel_type: "pending"
  )
end
1.times do
  UserRelationship.create(
    user1_id: other_users.pop,
    user2_id: demo,
    rel_type: "removed"
  )
end


10.times do
  Post.create(
    author_id: user_ids.first,
    body: Faker::Lorem.paragraphs(rand(1..6)).join(" "),
    page_id: user_ids.first
  )
end

post_ids = Post.ids

10.times do
  Comment.create(
    author_id: user_ids.sample,
    body: Faker::FamousLastWords.last_words,
    commentable_id: post_ids.sample,
    commentable_type: "Post"
  )
end

parent_comment_ids = Comment.ids

10.times do
  Comment.create(
    author_id: user_ids.sample,
    body: Faker::FamousLastWords.last_words,
    commentable_id: post_ids.sample,
    commentable_type: "Post",
    parent_id: parent_comment_ids.sample
  )
end
