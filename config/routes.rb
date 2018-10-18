Rails.application.routes.draw do
  get 'likes/create'
  get 'likes/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index]  
    resources :user_relationships, only: [:create, :update, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:update, :destroy, :show]
    resources :likes, only: [:create, :destroy, :index]
    get 'users/search'
  end
end
