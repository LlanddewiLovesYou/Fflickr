Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :update]
      resource :session, only: [:create, :destroy]
      resources :albums, except: [:index, :new, :edit]
      resources :photos, except: [:new, :edit] do
        resources :comments, only: [:create]
      end
      resources :comments, except: [:index, :new, :edit, :create]
      resources :tags, except: [:new, :index, :edit, :update]
    end

    root to: "static_pages#root"
end
