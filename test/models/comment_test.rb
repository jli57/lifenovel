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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
