json.extract! user, :id, :username
json.album_ids user.albums.pluck(:id)

# json.id user.id
# json.username user.username
# json.albumIds user.album_ids
