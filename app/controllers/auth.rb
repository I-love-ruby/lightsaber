get '/login' do
  erb :'auth/login'
end


post '/login' do
  erb :'auth/login_form'
end

get '/signup' do
  erb :'auth/signup'
end


post '/signup' do
  erb :'auth/signup_form'
end

get '/logout' do
session.clear
redirect '/'
end