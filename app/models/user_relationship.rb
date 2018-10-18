# == Schema Information
#
# Table name: user_relationships
#
#  id         :bigint(8)        not null, primary key
#  user1_id   :bigint(8)        not null
#  user2_id   :bigint(8)        not null
#  rel_type   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserRelationship < ApplicationRecord

  validates :user1_id, uniqueness: { scope: :user2_id }
  validates :user1_id, :user2_id, :rel_type, presence: true
  validates :rel_type, inclusion: { in: %w(pending accepted removed) }
  validate :bidirectional_relationship

  belongs_to :requester,
    foreign_key: :user1_id,
    class_name: :User
  belongs_to :requestee,
    foreign_key: :user2_id,
    class_name: :User

  def self.RELATIONSHIP_TYPES
    %w(pending accepted removed)
  end

  def bidirectional_relationship
    if UserRelationship.find_by(user1_id: self.user2_id, user2_id: self.user1_id)
      self.errors[:base] << "A relationship already exists"
    end
  end

end
