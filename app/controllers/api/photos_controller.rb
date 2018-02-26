class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    @users = User.all

    @photo.user_id = current_user.id
    if photo_params[:album_id]
      @photo.album = Album.find(photo_params[:album_id])
    end
    @user = current_user

    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.all.limit(50)
    render 'api/photos/index'
  end

  def show
    @photo = Photo.find(params[:id])
    @users = User.all
    @user = User.find(@photo.user_id)

    if @photo
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])
    @users = User.all
    if @photo.update(album_params)
      render 'api/photos/show'
      # render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @users = User.all
    if @photo.delete
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:user_id, :photo, :caption, :album_id, :title, comment_ids:[])

  end

end
