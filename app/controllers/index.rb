get '/' do
  if session[:user_id]
    @user = User.find(session[:user_id])
  end
  erb :index, layout: :'home_layout'
end


