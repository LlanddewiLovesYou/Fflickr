
json.tag do
  json.set! @tag.id do
    json.extract! @tag, :id, :tagname
    json.photo_ids @tag.photos.pluck(:id)
  end
end

json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end
