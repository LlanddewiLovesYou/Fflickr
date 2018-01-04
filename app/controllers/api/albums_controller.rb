class Api::AlbumsController < ApplicationController

  def new
    # render a thing having to do with creating a new album
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render '/api/albums/album'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show

  end

  def edit

  end

  def update

  end

  def delete

  end

  private

  def album_params
    params.require(:album).permit(:user_id, :photo_id, :title, :description)
  end

end
