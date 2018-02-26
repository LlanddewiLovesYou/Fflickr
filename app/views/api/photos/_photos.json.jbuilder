

json.photos do
  @photos.each do |photo|
    json.set! photo_id do
      json.partial 'api/photos/photo'
    end
  end
end
