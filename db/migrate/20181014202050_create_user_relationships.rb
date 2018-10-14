class CreateUserRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :user_relationships do |t|
      t.bigint :user1_id, null: false
      t.bigint :user2_id, null: false
      t.string :rel_type, null: false

      t.timestamps
    end
    add_index :user_relationships, [:user1_id, :user2_id], unique: true
    add_index :user_relationships, :user2_id
    add_index :user_relationships, :rel_type
  end
end
