class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    @user = current_user

    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
    if @photo
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = current_user.albums.find(params[:id])
    if @photo.update(album_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.albums.find(params[:id])
    if @photo.delete
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:user_id, :photo, :caption)

  end

end
