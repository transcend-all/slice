Rails.application.routes.draw do

  resources :coupon

  resources :menu

  resources :locations

  resources :tracker

  mount Spree::Core::Engine, at: '/order'

  root 'landing#index'

end
