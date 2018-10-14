# == Schema Information
#
# Table name: user_relationships
#
#  id           :bigint(8)        not null, primary key
#  requester_id :bigint(8)        not null
#  requestee_id :bigint(8)        not null
#  rel_type     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class UserRelationshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
