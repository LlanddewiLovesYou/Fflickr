class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
    if @album
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = current_user.albums.find(:params[:id])
    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def delete
    @album = current_user.albums.find(:params[:id])
    if @album.delete
      render 'api/albums/album'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:photo_id, :title, :description)
  end

end
