class Api::TagsController < ApplicationController

  # def new
  #   render :new
  # end

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id
    @tag.photo_ids.push(params[:id])
    @photo = Photo.find[:photo_id]
    if @tag.save
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
    @tag = Tag.find(params[:id])
    @photos = @tag.photos
    if @photos
      render 'api/tags/show'
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end


  private

  def tag_params
      params.require(:tag).permit(:tagname, photo_ids: [])
  end

end
