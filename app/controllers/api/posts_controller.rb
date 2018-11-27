class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
      .includes(:comments, :likes)
      .where(page_id: params[:user_ids])
      .order(created_at: :desc)
      .offset(params[:offset])
      .limit(params[:limit])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by_id(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by_id(params[:id])
    @post.destroy
    render json: {}
  end

  private

  def post_params
    params.require(:post).permit(:author_id, :body, :page_id, photos: [])
  end
end
