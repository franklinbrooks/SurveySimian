Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'index', to: 'hello_world#index'
  get 'survey', to: 'hello_world#survey'
  get 'results', to: 'hello_world#results'
  get 'error', to: 'hello_world#error'
  resources :surveys
  root 'hello_world#index'
end


