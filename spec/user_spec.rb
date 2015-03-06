require_relative 'spec_helper'
require "rspec"

describe "User"  do

  it "Render index status 200" do

    get '/'
      expect(last_response).to be_ok

  end
end