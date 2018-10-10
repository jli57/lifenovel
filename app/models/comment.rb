# == Schema Information
#
# Table name: comments
#
#  id               :bigint(8)        not null, primary key
#  author_id        :bigint(8)        not null
#  commentable_type :string           not null
#  commentable_id   :bigint(8)        not null
#  body             :text             not null
#  parent_id        :bigint(8)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :parent_comment,
    foreign_key: :parent_id,
    class_name: :Comment,
    optional: true

  has_many :child_comments,
    foreign_key: :parent_id,
    class_name: :Comment

  belongs_to :commentable, polymorphic: true
end
