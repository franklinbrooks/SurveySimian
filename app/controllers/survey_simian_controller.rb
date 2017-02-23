class SurveySimianController < ApplicationController
  def index
    @hello_world_props = { name: "SurveySimian" }
  end
  def survey
    @hello_world_props = { name: "Stranger" }
  end
  def results
    @hello_world_props = { name: "Stranger" }
  end
  def error
    @hello_world_props = { name: "Stranger" }
  end
end
