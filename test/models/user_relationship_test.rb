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

require 'test_helper'

class UserRelationshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
