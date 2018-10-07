class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null:false
      t.string :last_name, null: false
      t.string :email
      t.string :mobile_number
      t.date :birth_date, null: false
      t.string :gender, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, [:first_name, :last_name], unique: true
    add_index :users, :last_name
    add_index :users, :email, unique: true
    add_index :users, :mobile_number, unique: true
    add_index :users, :password_digest
    add_index :users, :session_token, unique: true

  end

end
