json.user do
  json.partial! "api/photos/photo", user: @user
end

json.albums do
  @album.photo.each do |photo|
    json.set! album.id do
      json.partial! "api/photos/photo", photo
    end
  end
end

# json.photos do
#
# end
