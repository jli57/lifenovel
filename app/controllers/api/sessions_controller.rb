class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:mobile_number],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    logout!
    if current_user
      render {}
    else
      render json: ["Already logged out"], status: 404
    end
  end
end
