json.extract! photo, :user_id, :caption, :id, :title
json.photo_url photo.photo.url
json.comment_ids photo.comments.pluck(:id)
