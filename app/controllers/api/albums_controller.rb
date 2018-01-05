class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    if @album.save
      render '/api/albums/album'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(:params[id])
    if @album
      render '/api/albums/album'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = Album.find(:params[id])
    if @album.save
      render '/api/albums/album'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def delete
    @album = Album.find(:params[id])
    if @album.delete
      render {}
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:user_id, :photo_id, :title, :description)
  end

end
