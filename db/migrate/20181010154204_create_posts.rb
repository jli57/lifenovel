class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.bigint :author_id, null:false
      t.text :body, null: false
      t.bigint :page_id, nulL: false

      t.timestamps
    end
    add_index :posts, :author_id
    add_index :posts, :page_id
  end
end
