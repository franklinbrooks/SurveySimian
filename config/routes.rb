Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'index', to: 'survey_simian#index'
  get 'survey', to: 'survey_simian#survey'
  get 'results', to: 'survey_simian#results'
  get 'error', to: 'survey_simian#error'
  resources :surveys
  root 'survey_simian#index'
end


