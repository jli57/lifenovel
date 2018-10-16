class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by_id(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    @comment.destroy
    render json: {}
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :body, :parent_id, :commentable_id, :commentable_type)
  end
end
