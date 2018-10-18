class ModifyLikeIndexes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, ["likeable_type", "likeable_id"]
    add_index :likes, [:likeable_type, :likeable_id, :user_id], unique: true
    add_index :likes, [:likeable_type, :likeable_id]
  end
end
