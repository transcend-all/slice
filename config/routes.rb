Rails.application.routes.draw do

  resources :coupon

  resources :menu

  resources :locations

  resources :tracker

  resources :specials

  resources :franchise

  resources :story

  resources :school

  mount Spree::Core::Engine, at: '/'

  root 'landing#index'

end
