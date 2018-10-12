class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    file = File.open('app/assets/images/default.jpg')
    @user.profile_photo.attach(io: file, filename: 'default.jpg')
    if @user.save
      login! @user
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :mobile_number,
      :password,
      :gender,
      :year,
      :month,
      :day)
  end

end
