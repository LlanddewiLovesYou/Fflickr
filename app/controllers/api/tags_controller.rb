class Api::TagsController < ApplicationController

  def create
    @tag = Tag.find_by_tagname(tag_params[:tagname])
    if !@tag
      @tag = Tag.new
      @tag.tagname = tag_params[:tagname]
      @photos = [Photo.find(tag_params[:photo_id])]
      @tag.photos = @photos
    else
      @tagging = Tagging.new
      @tagging.photo_id = tag_params[:photo_id]
      @tagging.tag_id = @tag.id
      @tagging.save
      @photos = @tag.photos
    end
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

  def destroy
    @tag = Tag.find_by_tagname(params[:id])
    @photoId = params[:photoId]
    @tagging = Tagging.where(tag_id: @tag.id, photo_id: @photoId)[0]
    if @tagging.destroy
      @photos = [Photo.find(@photoId)]
      render 'api/tags/show'
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
      params.require(:tag).permit(:tagname, :photo_id)
  end

end
