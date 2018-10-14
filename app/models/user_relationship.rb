# == Schema Information
#
# Table name: user_relationships
#
#  id           :bigint(8)        not null, primary key
#  requester_id :bigint(8)        not null
#  requestee_id :bigint(8)        not null
#  type         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class UserRelationship < ApplicationRecord

  validates :requester_id, uniqueness: { scope: :requestee_id }
  validates :requester_id, :requestee_id, :type, presence: true
  validates :type, inclusion: { in: %w(pending accepted removed) }

  belongs_to :requester,
    foreign_key: :requester_id,
    class_name: :UserRelationship
  belongs_to :requestee,
    foreign_key: :requestee_id,
    class_name: :UserRelationship

  def self.RELATIONSHIP_TYPES
    %w(pending accepted removed)
  end
  
end
