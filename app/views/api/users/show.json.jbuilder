

json.user do
  json.partial! "api/users/user", user: @user
end

json.albums do
  @user.albums.each do |album|
    json.set! album.id do
      json.partial! "api/albums/album", album: album
    end
  end
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end
