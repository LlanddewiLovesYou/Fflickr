class Api::CommentsController < ApplicationController

  def create
    @user = current_user
    @photo = Photo.find(params[:photo_id])
    @comment = @photo.comments.new
    @comment.user_id = current_user.id
    @comment.body = comment_params[:body]
    if @comment.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @comment = current_user.comments.find(params[:id])
    @photo = @comment.photo
    if @comment.update(comment_params)
      render 'api/photos/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    @comment = current_user.comments.find(params[:id])
    @photo = @comment.photo
    if @comment.delete
      render 'api/photos/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end

end
