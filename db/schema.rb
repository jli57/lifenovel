# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_18_041149) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.string "commentable_type", null: false
    t.bigint "commentable_id", null: false
    t.text "body", null: false
    t.bigint "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["commentable_id"], name: "index_comments_on_commentable_id"
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
    t.index ["commentable_type"], name: "index_comments_on_commentable_type"
    t.index ["parent_id"], name: "index_comments_on_parent_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id"
    t.string "likeable_type", null: false
    t.bigint "likeable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["likeable_id"], name: "index_likes_on_likeable_id"
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable_type_and_likeable_id", unique: true
    t.index ["likeable_type"], name: "index_likes_on_likeable_type"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.text "body", null: false
    t.bigint "page_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["page_id"], name: "index_posts_on_page_id"
  end

  create_table "user_relationships", force: :cascade do |t|
    t.bigint "user1_id", null: false
    t.bigint "user2_id", null: false
    t.string "rel_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["rel_type"], name: "index_user_relationships_on_rel_type"
    t.index ["user1_id", "user2_id"], name: "index_user_relationships_on_user1_id_and_user2_id", unique: true
    t.index ["user2_id"], name: "index_user_relationships_on_user2_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email"
    t.string "mobile_number"
    t.date "birth_date", null: false
    t.string "gender", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["first_name", "last_name"], name: "index_users_on_first_name_and_last_name", unique: true
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["mobile_number"], name: "index_users_on_mobile_number", unique: true
    t.index ["password_digest"], name: "index_users_on_password_digest"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "likes", "users"
end
