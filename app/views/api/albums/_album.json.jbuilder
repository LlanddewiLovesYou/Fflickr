json.extract! album, :id, :title, :description, :user_id
json.photoIds album.photos.pluck(:id)
