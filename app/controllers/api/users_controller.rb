class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/auth"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:albums).find(params[:id])
    if @user
      @albums = @user.albums
      render :show
    else
      render json: "User does not exist.", status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    @albums = @user.albums
    if @user.update(user_params)
      render :show
    else
      render @user.errors.full_messages, status: 422
    end

  end



private

  def user_params
    params.require(:user).permit(:username, :password, :joined, :occupation, :hometown, :current_city, :email, :website)
  end

end
