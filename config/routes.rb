Rails.application.routes.draw do

  resources :coupon
  resources :menu
  resources :locations
  resources :tracker
  resources :specials
  resources :franchise
  resources :story
  resources :school
  resources :sandwiches
  resources :pizza
  resources :pasta
  resources :chicken
  resources :sides
  resources :drinks
  resources :desserts
  resources :popular_items


  mount Spree::Core::Engine, at: '/'

  root 'landing#index'

end

Spree::Core::Engine.routes.draw do
  resources :pizza
  resources :sandwiches
  resources :pasta
  resources :chicken
  resources :sides
  resources :drinks
  resources :desserts
  resources :popular_items
  resources :coupon
end
