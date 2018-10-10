class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.bigint :author_id, null: false
      t.belongs_to :commentable, null: false, polymorphic: true
      t.text :body, null: false
      t.bigint :parent_id

      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, [:commentable_id, :commentable_type]
    add_index :comments, [:commentable_type]
    add_index :comments, :parent_id
  end
end
