Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :edit]
      resource :session, only: [:create, :destroy]
      resources :albums, except: [:index, :new, :edit]
      resources :photos, except: [:index, :new, :edit]
    end

    root to: "static_pages#root"
end
