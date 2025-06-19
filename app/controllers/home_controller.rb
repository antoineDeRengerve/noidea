class HomeController < ApplicationController
  def index
    render inertia: "Home", props: {
      version: GitVersion.version_info
    }
  end
end
