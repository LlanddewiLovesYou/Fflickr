class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new
    @tag.tagname = tag_params[:tagname]
    @photos = [Photo.find(tag_params[:photo_id])]
    @tag.photos = @photos
    if @tag.save
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
    @tag = Tag.find_by_tagname(params[:id])
    @photos = @tag.photos
    if @photos
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
      params.require(:tag).permit(:tagname, :photo_id)
  end

end
