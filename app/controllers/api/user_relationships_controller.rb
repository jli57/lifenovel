class Api::UserRelationshipsController < ApplicationController

  def create

  end

  def update

  end

  def destroy

  end

  private

  def user_relationships_params
    params.require(:user_relationship).permit(:user2_id, :rel_type)
  end
end
