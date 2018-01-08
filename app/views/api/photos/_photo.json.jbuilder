json.extract! photo, :user_id, :photo_file_name, :photo_content_type, :photo_file_size, :photo_updated_at, :caption
json.photo_ids user.photos.pluck(:id)

# json.id user.id
# json.username user.username
# json.albumIds user.album_ids
