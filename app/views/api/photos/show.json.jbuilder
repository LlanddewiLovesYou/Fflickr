json.user do
  json.partial! "api/users/user", user: @user
end

# {user:{user: @user}}

json.albums do
  @user.albums.each do |album|
    json.set! album.id do
      json.partial! "api/albums/album", album: album
    end
  end
end

# {user:{user: @user}, albums:{albums: @albums}}

json.photo do
  json.partial! 'api/photos/photo', photo: @photo, user: @user
end
