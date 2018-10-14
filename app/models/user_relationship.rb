# == Schema Information
#
# Table name: user_relationships
#
#  id           :bigint(8)        not null, primary key
#  user1_id :bigint(8)        not null
#  user2_id :bigint(8)        not null
#  rel_type     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class UserRelationship < ApplicationRecord

  validates :user1_id, uniqueness: { scope: :user2_id }
  validates :user1_id, :user2_id, :type, presence: true
  validates :rel_type, inclusion: { in: %w(pending accepted removed) }

  belongs_to :requester,
    foreign_key: :user1_id,
    class_name: :UserRelationship
  belongs_to :requestee,
    foreign_key: :user2_id,
    class_name: :UserRelationship

  def self.RELATIONSHIP_TYPES
    %w(pending accepted removed)
  end

end
