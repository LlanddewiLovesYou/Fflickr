class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.photo_id = comment_params[:photo_id]
    @comment.body = comment_params[:body]
    if @comment.save
      render 'api/comments/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Photo.find(params[:id])
    if @comment
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update(comment_params)
      render 'api/comment/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if @comment.delete
      render 'api/comment/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end

end
