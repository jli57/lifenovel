# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  author_id  :bigint(8)        not null
#  body       :text             not null
#  page_id    :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

  validates :body,  presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :page,
    foreign_key: :page_id,
    class_name: :User

  has_many :comments,
    as: :commentable,
    dependent: :delete_all
    
end
