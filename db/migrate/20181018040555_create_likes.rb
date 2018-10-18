class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :user, foreign_key: true
      t.belongs_to :likeable, null: false, polymorphic: true 
      
      t.timestamps
    end
    add_index :likes, [:likeable_id, :likeable_type], unique: true 
    add_index :likes, :likeable_type
  end
end
