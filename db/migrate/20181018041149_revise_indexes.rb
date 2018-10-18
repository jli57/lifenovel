class ReviseIndexes < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, name: :index_comments_on_commentable_id_and_commentable_type
    remove_index :likes, name: :index_likes_on_likeable_id_and_likeable_type
    remove_index :likes, name: :index_likes_on_likeable_type_and_likeable_id
    add_index :likes, [:likeable_type, :likeable_id], unique: true
    add_index :likes, :likeable_id
  end
end
