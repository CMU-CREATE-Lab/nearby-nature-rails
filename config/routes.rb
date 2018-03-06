Rails.application.routes.draw do
  resources :examples
  get 'home/index'
  get "/" => "home#index"
  get "/how_to" => "home#how_to"
end
