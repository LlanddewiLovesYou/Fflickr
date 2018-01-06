json.album do
  json.set! @album.id do
    json.partial! "api/albums/album", album: @album
  end
end
#under a key of albumid and then nested again under key of 'album'
