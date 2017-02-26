class SurveySimianController < ApplicationController
  def index
    @hello_world_props = { name: "SurveySimian" }
  end
  def results
    @hello_world_props = { name: "Stranger" }
  end
  def survey
    @hello_world_props = { name: "Stranger" }
  end
end
