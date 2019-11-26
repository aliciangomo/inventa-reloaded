Rails.application.routes.draw do
  root to: 'pages#home'

  get "arthub", to: 'pages#arthub', as: "arthub"
  get "pamperme", to: 'pages#pamperme', as: "pamperme"
  get "inventa", to: 'pages#inventa', as: "inventa"
  get "fitfashion", to: 'pages#fitfashion', as: "fitfashion"
  get "aliciaart", to: 'pages#contact', as: "aliciaart"
  get "mypet", to: 'pages#mypet', as: "mypet"

  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
