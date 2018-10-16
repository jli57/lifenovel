class Api::UserRelationshipsController < ApplicationController

  def create
    @user_relationship = UserRelationship.new(user_relationship_params)
    if @user_relationship.save
      render :show
    else
      render json: @user_relationship.errors.full_messages, status: 422
    end
  end

  def update
    @user_relationship = UserRelationship.find_by_id(params[:id])
    if @user_relationship.update(update_params)
      render :show
    else
      render json: @user_relationship.errors.full_messages, status: 422
    end
  end

  def destroy
    @user_relationship = UserRelationship.find_by_id(params[:id])
    @user_relationship.destroy
    render json: {}
  end

  private

  def user_relationship_params
    params.require(:user_relationship).permit(:user1_id, :user2_id, :rel_type)
  end

  def update_params
    params.require(:user_relationship).permit(:rel_type)
  end

end
