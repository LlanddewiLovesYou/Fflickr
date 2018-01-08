json.album do
  json.set! @album.id do
    json.partial! "api/albums/album", album: @album
  end
end

json.user do
  json.set! @album.user_id do
    json.partial! "api/users/user", user: @album.user
  end
end

# json.photos do
#   @album.photo.each do |photo|
#     json.set! album.id do
#       json.partial! "api/photos/photo", photo.id: photo
#     end
#   end
# end
#under a key of albumid and then nested again under key of 'album'
