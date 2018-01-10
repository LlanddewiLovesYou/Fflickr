json.extract! user, :id, :username
json.albumIds user.albums.pluck(:id)
json.photoIds user.photos.pluck(:id)


# json.id user.id
# json.username user.username
# json.albumIds user.album_ids
