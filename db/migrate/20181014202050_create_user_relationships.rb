class CreateUserRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :user_relationships do |t|
      t.bigint :requester_id, null: false
      t.bigint :requestee_id, null: false
      t.string :type, null: false

      t.timestamps
    end
    add_index :user_relationships, [:requester_id, :requestee_id], unique: true
    add_index :user_relationships, :requestee_id
    add_index :user_relationships, :type
  end
end
